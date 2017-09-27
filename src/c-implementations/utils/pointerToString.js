import { heapU8 } from './../../wasm-memory.js';

/**
 * pointerToString
 * 
 * Takes a pointer to a memory address within our 8-bit heap, and returns the string it contains
 */

export default pointer => {
    let result = '';
    
    while(true) {
        // Retrieve the value stored at the current pointer
        const value = heapU8[pointer];
        
        if (value === 0) break; // As the value is 0, we reached the end of this memory entry
        
        // Value stored is a UTF-8 charCode, so return the corresponding character as a string
        result += String.fromCharCode(value);
        
        // Move the pointer up
        pointer++;
    }
    
    return result;
};

// Emscripten implementation
/////////////////////////////

// import UTF8ArrayToString from './UTF8ArrayToString';
/*
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
*/