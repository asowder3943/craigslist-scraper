// This is the main Node.js source code file of your actor.
// An actor is a program that takes an input and produces an output.

// For more information, see https://sdk.apify.com/
import { Actor } from 'apify';
import { buildRequestUrls, CraigslistSearchInput} from "./craigslist.js";

interface InputSchema {
    location: string[] | undefined
    category: string[] | undefined
    query: string[] | undefined
}

await Actor.init()

console.log('Loading input');
// Structure of input is defined in INPUT_SCHEMA.json.
const input = await Actor.getInput<InputSchema>() as CraigslistSearchInput;

console.info(buildRequestUrls(input))

// Structure of output is defined in .actor/actor.json
await Actor.pushData({
    location: input!.location,
    category: input!.category,
    query: input!.query,
});

await Actor.exit();
