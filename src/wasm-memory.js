export const memory = {
	memoryBase: 0,
	tableBase: 0,
	memory: new WebAssembly.Memory({ initial: 256 }),
	table: new WebAssembly.Table({ initial: 0, element: 'anyfunc'}),
};

// Bytes are 8 bits, so we need a Uint8Array in order to access our memory addresses
export const heapU8 = new Uint8Array(memory.memory.buffer);
