/**
 * Implementations of the C libraries used by WASM modules
 * Should all start with an underscore
 */

import _printf from './printf';

export default {
	_printf,
};