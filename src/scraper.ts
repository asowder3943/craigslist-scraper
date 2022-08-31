import { PlaywrightCrawler } from 'crawlee'
import { strict as assert } from "assert";
import { CraigslistPost } from './craigslist';
import { Actor } from 'apify';

export function getCraigslistScraper(actor: Actor) : PlaywrightCrawler {
return new PlaywrightCrawler({
    maxRequestsPerCrawl: 10,
    headless: false,
    requestHandler: async ({ page, request }) => {
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

    await actor.pushData(_posts)
}})}