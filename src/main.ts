// This is the main Node.js source code file of your actor.
// An actor is a program that takes an input and produces an output.

// For more information, see https://sdk.apify.com/
import { Actor } from 'apify';
import { InputSchema } from './types.js'

await Actor.init()
console.log('Loading input');
const input = await Actor.getInput<InputSchema>();
console.info(input)
await Actor.exit();
