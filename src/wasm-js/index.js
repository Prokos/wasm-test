/**
 * JS methods called from WASM
 * Should all start with an underscore
 */

import _js_moveBox from 'wasm-js/moveBox';
import _printf from 'wasm-js/printf';

export default {
	_printf,
	_js_moveBox,
};