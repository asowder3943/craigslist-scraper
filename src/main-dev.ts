import { InputSchema } from "./types.js";
import { getRequestUrlsFromInput } from "./validation.js";
import { crawler } from "./scraper-dev.js"

/** Input Working Test Case */
const realWorld: InputSchema = {
  category: ["ggg"],
};

/** Urls Associated with working Test Case */
const urls = getRequestUrlsFromInput(realWorld)

// Run a Development Crawler with Test Urls
crawler.run(urls)