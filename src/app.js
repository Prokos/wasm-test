import { memory } from 'wasm-memory';
import cppImplementations from 'c-implementations/index';

import wasmModule from 'wasm/addInts.wasm';

export default () => {
	wasmModule({ env: { ...memory, ...cppImplementations }})
	.then(module => module.instance.exports)
	.then(wasm => {
		wasm._main();
		console.info('Addition result: ', wasm._addInts(500, 837));		
		console.info('Addition result: ', wasm._addInts(19, 31));		
	});
}
