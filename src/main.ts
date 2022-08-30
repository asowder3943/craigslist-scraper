// This is the main Node.js source code file of your actor.
// An actor is a program that takes an input and produces an output.

// For more information, see https://sdk.apify.com/
import { Actor } from 'apify';
import { CraigslistCategories } from './category.js'
import { CraigslistLocations } from './location.js'
import { strict as assert } from 'assert'


interface InputSchema {
    location: string[]
    category: string[]
    query: string[]
}

await Actor.init()

console.log('Loading input');
// Structure of input is defined in INPUT_SCHEMA.json.
const input = await Actor.getInput<InputSchema>();

for (var _loc in input!.location){
    assert(CraigslistLocations.filter(e => _loc === e.url_part).length > 0, "At least one of the provided locations does not match supported locations see <Not Implemented> for details.")
}

for (var _cat in input!.category){
    assert(CraigslistCategories.filter(e => _cat === e.url_part).length > 0, "At least one of the provided categories does not match supported locations see <Not Implemented> for details.")
}

console.log('Location: ', input!.location);
console.log('Category: ', input!.category);
console.log('Query: ', input!.query);

// Structure of output is defined in .actor/actor.json
await Actor.pushData({
    location: input!.location,
    category: input!.category,
    query: input!.query,
});

await Actor.exit();
