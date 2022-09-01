import { Actor } from "apify";
import { CrawlerSetup } from "./scraper.js";
import { InputSchema } from "./types.js";

const __workingInputCase: InputSchema = {
  category: ["ggg"],
  maxPagesPerCrawl: 10,
  proxyConfiguration: {
      useApifyProxy: false
  },
};

await Actor.init();
console.info("Loading input");
console.info(__workingInputCase);
console.info('Initializing Craigslist Crawler')
const crawlerSetup = new CrawlerSetup(__workingInputCase!)
const crawler = await crawlerSetup.getCrawler()
console.info(`Crawler Initialization Complete: ${crawlerSetup.startUrls.length} urls have been added to the queue`)
await crawler.run(crawlerSetup.startUrls)
await Actor.exit();