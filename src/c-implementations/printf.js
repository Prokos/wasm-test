import pointerToString from './utils/pointerToString';

export default pointer => {
	const string = pointerToString(pointer);
	console.info(string);
};