# WASM test

Project for testing WASM scripts and build process.

An attempt to make WASM work with the minimum amount of dependencies and file-size.

Run `yarn watch` and open browser in `http://localhost:1337` to run app.

**NOTE:** This repository is used for personal learning purposes. You should probably just use emscripten's optimised implementations.

## Structure

`c/` contains C scripts that will be compiled to WASM

`src/` contains Javascript source

`static/` contains static files (html etc)

`wasm/` will contain WASM scripts after running `yarn watch`

`dist/` will contain final build after running `yarn watch`

## Todo

1. Write an unoptimised but readable UTF8ArrayToString implementation -- for learnings
1. Make sure `compile-c.sh` re-runs on changing of files in `c/`
1. Make sure `compile-c.sh` compiles any and all files in `c/`
1. Actually do something useful with WASM instead of just adding integers together :D
1. Fine-tune memory and investigate impact of configurations