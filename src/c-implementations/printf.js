import pointerToString from 'c-implementations/utils/pointerToString';

export default pointer => {
	const string = pointerToString(pointer);
	console.info(string);
};