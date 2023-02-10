import { PROXY_ROTATION_NAMES, SESSION_MAX_USAGE_COUNTS } from "./consts.js";
import { PlaywrightCrawler } from "crawlee";
import { strict as assert } from "assert";
import { CraigslistPost, InputSchema, Search } from "./types.js";
import { validateInput, getRequestUrls } from "./validation.js";
import { Actor } from "apify";
import axios from "axios";

export class CrawlerSetup {

  // Provide typing information 
  name: string;
  search: Search;
  crawler!: PlaywrightCrawler | Promise<PlaywrightCrawler>;
  input: InputSchema;
  startUrls: string[];
  maxSessionUsageCount: number;
  maxPoolSize!: number;

  // Construct Playwright scraper with input defining the scope of the search
  constructor(input: InputSchema) {
    this.input = input;
    this.name = "Craigslist Playwright Scraper";
    this.search = validateInput(input);
    this.startUrls = getRequestUrls(this.search);
    this.maxSessionUsageCount = SESSION_MAX_USAGE_COUNTS[input.proxyRotation]!;
    if (this.input.proxyRotation === PROXY_ROTATION_NAMES.UNTIL_FAILURE) {
      this.maxPoolSize = 1;
    }
  }

  async getCrawler(): Promise<PlaywrightCrawler> {
    await axios.get(this.input.healthcheck!).catch(() => {});

    return new PlaywrightCrawler({
      maxConcurrency: this.input.maxConcurrency,
      maxRequestRetries: this.input.maxRequestRetries,
      maxRequestsPerCrawl: this.input.maxPagesPerCrawl,
      proxyConfiguration: await Actor.createProxyConfiguration(
        this.input.proxyConfiguration
      ),
      useSessionPool: true,
      sessionPoolOptions: {
        maxPoolSize: this.maxPoolSize,
        sessionOptions: {
          maxUsageCount: this.maxSessionUsageCount,
        },
      },
      headless: true,
      // for each request preform the following:
      requestHandler: async ({ page, request }) => {
        console.log(`Scraping ${await page.title()} | ${request.url}`);

        // collect important features from the current page including post titles, urls, and dates of posting
        const titles = await page.$$eval(".titlestring", (els: any[]) => {
          return els.map((el) => el.textContent);
        });


        const urls = await page.$$eval(".titlestring", (els: any[]) => {
          return els.map((el) => el.getAttribute("href"));
        });

        const dates = await page.$$eval(".meta", (els: any[]) => {
          return els.map((el) => {
            let ih =  el.getInnerHTML()
            let ub = ih.search(/\(/)
            let created = new Date(ih.substring(13,ub-1))
            return JSON.stringify(created).replace(/\\/g, '').replace(/"/g,'')
          });
        });


        // Sanity Check: Confirm the list of titles matched the number of dates and urls discovered
        try {
          assert.equal(
            titles.length,
            urls.length,
            `The number of titles found does not match the number of urls found`
          );
          assert.equal(
            urls.length,
            dates.length,
            `The number of titles found does not match the number of urls found`
          );
        } catch (AssertionError) {
          console.warn(`${AssertionError}`);
        }

        // construct an array of Craigslist Post objects using the features collected from the page
        var posts: CraigslistPost[] = [];
        for (var i in titles) {
          posts.push({
            url: await urls[i]!,
            description: await titles[i]!,
            created: await dates[i]!,
          });
          console.info(posts)
        }

        // Save Data to Key Value Store
        await Actor.pushData(posts);

        // Send All posts to backend django server for analyses
        posts.forEach(async (post) => {
          await console.log(post)
          await axios.post(this.input.externalAPI!, post).catch(() => {});
        });
      },
    });
  }
}
