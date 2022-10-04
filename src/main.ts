import { Actor } from "apify";
import { CrawlerSetup } from "./scraper.js";
import { InputSchema } from "./types.js";

await Actor.init();
console.info("Loading input");
const input = await Actor.getInput<InputSchema>();
console.info('Initializing Craigslist Crawler')
const crawlerSetup = new CrawlerSetup(input!)
const crawler = await crawlerSetup.getCrawler()
console.info(`Crawler Initialization Complete: ${crawlerSetup.startUrls.length} urls have been added to the queue`)
await crawler.run(crawlerSetup.startUrls)
console.info('testing push')
await Actor.exit();
