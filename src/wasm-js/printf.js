import pointerToString from 'wasm-js/utils/pointerToString';

export default pointer => {
	const string = pointerToString(pointer);
	console.info(string);
};