export default {
	memoryBase: 0,
	tableBase: 0,
	memory: new WebAssembly.Memory({ initial: 256 }),
	table: new WebAssembly.Table({ initial: 0, element: 'anyfunc'}),
};