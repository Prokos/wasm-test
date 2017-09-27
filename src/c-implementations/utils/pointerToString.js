import { heapU8 } from 'app';
import UTF8ArrayToString from 'c-implementations/utils/UTF8ArrayToString';

/**
 * pointerToString
 * 
 * Takes a pointer to a memory address within our 8-bit heap, and returns the string it contains
 */

const pointerContainsOnlySingleByteCharacters = pointer => {
    while (true) {
        const value = heapU8[pointer++];
        if (value === 0) break;

        // Return false if this character spans multiple bytes
        if (value >= 128) return false;
    }

    return true;
};

export default pointer => {
    let result = '';

    // If the pointer also contains multi-byte characters, go to voodoo
    if (!pointerContainsOnlySingleByteCharacters(pointer)) {
        return UTF8ArrayToString(heapU8, pointer);
    } 
    
    while(true) {
        // Retrieve the value stored at the current pointer and move it up
        const value = heapU8[pointer++];
        
        if (value === 0) break; // As the value is 0, we reached the end of this memory entry

        // Value stored is a UTF-8 charCode, so return the corresponding character as a string
        result += String.fromCharCode(value);
    }
    
    return result;
};
