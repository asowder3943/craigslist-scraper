/**
 * Entrypoint for running in a local dev environment
 */

import { Actor } from 'apify';
import { CrawlerSetup } from './scraper.js';
import { InputSchema } from './types.js';

const workingInputCase: InputSchema = {
	// Example Development Configuration
	category: ['ggg'],
	maxPagesPerCrawl: 10,
	proxyConfiguration: {
		useApifyProxy: false,
	},
};

await Actor.init();
console.info('Loading input');
console.info(workingInputCase);
console.info('Initializing Craigslist Crawler');
const crawlerSetup = new CrawlerSetup(workingInputCase!);
const crawler = await crawlerSetup.getCrawler();
console.info(
	`Crawler Initialization Complete: ${crawlerSetup.startUrls.length} urls have been added to the queue`,
);
await crawler.run(crawlerSetup.startUrls);
await Actor.exit();
