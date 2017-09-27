import app from 'app';

if (typeof window.WebAssembly === 'undefined') {
	throw new Error('Sorry, your browser does not support WebAssembly');
}

app();