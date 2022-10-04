import { PROXY_ROTATION_NAMES, SESSION_MAX_USAGE_COUNTS } from "./consts.js";
import { PlaywrightCrawler } from "crawlee";
import { strict as assert } from "assert";
import { CraigslistPost, InputSchema, Search } from "./types.js";
import { validateInput, getRequestUrls } from "./validation.js";
import { Actor } from "apify";
import axios from "axios";

export class CrawlerSetup {

  name: string;
  search: Search;
  crawler!: PlaywrightCrawler | Promise<PlaywrightCrawler>;
  input: InputSchema;
  startUrls: string[];
  maxSessionUsageCount: number
  maxPoolSize!: number;

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

  async getCrawler(): Promise<PlaywrightCrawler>{
    return new PlaywrightCrawler(
      {
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
      headless: false,
      requestHandler: async ({ page , request }) => {
        console.log(`Scraping ${await page.title()} | ${request.url}`);

        const _titles = await page.$$eval(".result-title", (els: any[]) => {
          return els.map((el) => el.textContent);
        });

        const _urls = await page.$$eval(".result-title", (els: any[]) => {
          return els.map((el) => el.getAttribute("href"));
        });

        const _dates = await page.$$eval(".result-date", (els: any[]) => {
          return els.map((el) => el.getAttribute("datetime"));
        });

        try {
          assert.equal(
            _titles.length,
            _urls.length,
            `The number of titles found does not match the number of urls found`
          );
          assert.equal(
            _urls.length,
            _dates.length,
            `The number of titles found does not match the number of urls found`
          );
        } catch (AssertionError) {
          console.warn(`${AssertionError}`);
        }

        var _posts: CraigslistPost[] = []
        for (var i in _titles) {
          _posts.push({
            url: _urls[i]!,
            description: _titles[i]!,
            created: _dates[i]!,
          });
        }
        await Actor.pushData(_posts);
        _posts.forEach(async (_post) => {await axios.post(process.env.API_URL!, _post)})
      }
    })
  }
}