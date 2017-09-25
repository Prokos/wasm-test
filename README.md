# WASM test

Project for testing WASM scripts and build process

## Structure

`c/` contains C scripts that will be compiled to WASM
`src/` contains Javascript source
`static/` contains static files (html etc)
`wasm/` will contain WASM scripts after running `yarn watch`

## Todo

1. Figure out why `printf` will only log `0` instead of the string given
2. Make sure `compile-c.sh` re-runs on changing of files in `c/`.
3. Actually do something useful with WASM instead of just adding integers together :D
4. Add documentation for every part of the code
5. Fine-tune `config/wasm-memory.js` and investigate impact of configurations