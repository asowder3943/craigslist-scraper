// This is the main Node.js source code file of your actor.
// An actor is a program that takes an input and produces an output.

// For more information, see https://sdk.apify.com/
import { Actor } from 'apify';

interface LocationInputSchema {
    site: string[] | undefined
    geoLocation: string[] | undefined
    zip: string[] | undefined
}

interface SearchInputSchema {
    category: string[] | undefined
    query: string[] | undefined
    titleOnly: Boolean
}

await Actor.init()
console.log('Loading input');
const locations = await Actor.getInput<LocationInputSchema>();
const searches = await Actor.getInput<SearchInputSchema>();
console.log(locations)
console.log(searches)
await Actor.exit();
