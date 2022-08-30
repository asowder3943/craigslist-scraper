// This is the main Node.js source code file of your actor.
// An actor is a program that takes an input and produces an output.

// For more information, see https://sdk.apify.com/
import { Actor } from 'apify';
import { CraigslistSearchInput, buildRequestUrls, CraigslistPost } from "./craigslist.js";
import { PlaywrightCrawler, Dataset } from 'crawlee'
import { strict as assert } from "assert";

interface InputSchema {
    location: string[] | undefined
    category: string[] | undefined
    query: string[] | undefined
}

await Actor.init()

console.log('Loading input');
// Structure of input is defined in INPUT_SCHEMA.json.
const input = await Actor.getInput<InputSchema>() as CraigslistSearchInput;


const crawler = new PlaywrightCrawler({
    maxRequestsPerCrawl: 10,
    headless: false,
    requestHandler: async ({ page, request }) => {
        console.log(`Scraping ${await page.title()} | ${request.url}`);
    const dataset = await Dataset.open();

    const _titles = await page.$$eval(".result-title", (els: any[]) => {
      return els.map((el) => el.textContent);
    });

    const _urls = await page.$$eval(".result-title", (els: any[]) => {
      return els.map((el) => el.getAttribute("href"));
    });

    const _dates = await page.$$eval(".result-date", (els: any[]) => {
      return els.map((el) => el.getAttribute("datetime"));
    });

    try{
        assert.equal(_titles.length, _urls.length, `The number of titles found does not match the number of urls found`)
        assert.equal(_urls.length, _dates.length, `The number of titles found does not match the number of urls found`)
    }
    catch(AssertionError){
        console.warn(`${AssertionError}`)
    }

    var _posts: CraigslistPost[] = []
    
    for(var i = 0; i < _titles.length; i++){
        _posts.push({
            url: _urls[i]!,
            title: _titles[i]!,
            date: _dates[i]!
        })
    }

    await Actor.pushData(_posts)
}})

await crawler.run(buildRequestUrls(input));

await Actor.exit();
