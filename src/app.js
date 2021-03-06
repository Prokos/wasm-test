import * as PIXI from 'pixi.js';

import wasmJs from 'wasm-js/index';

import loadWebAssemblyModule from 'wasm/app.wasm';

export const memory = new WebAssembly.Memory({ initial: 256 });
export const table = new WebAssembly.Table({ initial: 0, element: 'anyfunc' });

export const heapU8 = new Uint8Array(memory.buffer);

export default () => {
	loadWebAssemblyModule({ 
		env: { 
			memoryBase: 0,
			memory,

			tableBase: 0,
			table,

			// Pass through all JS methods that will be called from this module
			...wasmJs, 
		},
	})
	.then(module =>  {
		const exports = module.instance.exports;

		// Initialise PIXI
		const pixiApp = new PIXI.Application();
		document.body.appendChild(pixiApp.view);

		// Initialise app
		exports._main();

		// Start up game loop
		const animate = () => {
			exports._animate();
			requestAnimationFrame(animate);
		};
		requestAnimationFrame(animate);
	});
};
