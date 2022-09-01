import { InputSchema } from "./types.js";
import { getRequestUrlsFromInput } from "./validation.js";
import { crawler } from "./scraper-dev.js"
var realWorld: InputSchema = {
  category: ["ggg"],
};

var urls = getRequestUrlsFromInput(realWorld)
crawler.run(urls)