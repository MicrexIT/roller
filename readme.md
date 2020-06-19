# PONICODE interview

install with:
`npm install`

test with:
`npm run test`

## Content

- indexBrute.ts is the brute force implementation of the algorithm. It passes all the test online but is way too slow locally

- index.ts is the refined memoized version which fails the last test online but runs much quicker locally. Its result do not deviate much from the expected one.

## Notes

I am not a typescript wizard (yet) and took a while to make it run on locally.
I couldn't find the readline function and had to implement it myself.
