# Short Test of the Apify Input

# input Schema:
```js
interface InputSchema {
    location: string[]
    category: string[]
    query: string[]
}
```

# Output

```js
await Actor.pushData({
    location: input?.location,
    category: input?.category,
    query: input?.query,
});
```


