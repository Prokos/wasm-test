import cppImplementations from 'c-implementations/index';

import wasmModule from 'wasm/addInts.wasm';

export const memory = new WebAssembly.Memory({ initial: 256 });
export const table = new WebAssembly.Table({ initial: 0, element: 'anyfunc' });

export const heapU8 = new Uint8Array(memory.buffer);

export default () => {
	wasmModule({ env: { 
		memoryBase: 0,
		memory,

		tableBase: 0,
		table,

		...cppImplementations,
	}})
	.then(module => module.instance.exports)
	.then(wasm => {
		wasm._main();

		console.info('Addition result: ', wasm._addInts(500, 837));		
		console.info('Addition result: ', wasm._addInts(19, 31));		
	});
}
