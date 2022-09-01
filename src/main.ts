import { Actor } from 'apify';
import { InputSchema } from './types.js'

await Actor.init()
console.log('Loading input');
const input = await Actor.getInput<InputSchema>();
console.info(input)
await Actor.exit();
