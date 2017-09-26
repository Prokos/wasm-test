import { heapU8 } from './../../wasm-memory.js';
import UTF8ArrayToString from './UTF8ArrayToString';

// Thanks emscripten

const MAX_CHUNK = 1024;

export default pointer => {
    let hasUtf = 0;
    let t;
    let i = 0;
    while (true) {
        t = heapU8[pointer + i >> 0];
        hasUtf |= t;

        if (t == 0) break;
        i++;
    }
    let length = i;
    let ret = "";
    if (hasUtf < 128) {
        let curr;
        while (length > 0) {
            curr = String.fromCharCode.apply(String, heapU8.subarray(pointer, pointer + Math.min(length, MAX_CHUNK)));
            ret = ret ? ret + curr : curr;
            pointer += MAX_CHUNK;
            length -= MAX_CHUNK
        }
        return ret
    }

    return UTF8ArrayToString(heapU8, pointer);
};
