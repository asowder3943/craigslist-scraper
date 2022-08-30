import { CraigslistSearchInput, buildRequestUrls, CraigslistPost } from "./craigslist.js";
import { PlaywrightCrawler, Dataset } from 'crawlee'
import { strict as assert } from "assert";

// var rich_input: CraigslistSearchInput = {
//   location: ["auburn"],
//   category: ["ggg"],
//   query: ["testing", "exam"],
// };

// var missing_cat_input: CraigslistSearchInput = {
//   location: ["auburn"],
//   query: ["testing", "exam"],
// };

var missing_loc_input: CraigslistSearchInput = {
  category: ["ggg"],
  query: ["testing", "exam"],
};

// validateSearchInput(rich_input);
// validateSearchInput(missing_cat_input);
// validateSearchInput(missing_loc_input);

// console.info(buildRequestUrls(rich_input));
// console.info(buildRequestUrls(missing_cat_input));
// console.info(buildRequestUrls(missing_loc_input));

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

    await dataset.pushData(_posts)
}})

await crawler.run(buildRequestUrls(missing_loc_input));
