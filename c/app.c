#include "wasm_js.h"

int main() {
	printf("WebAssembly Module Loaded - привет мир");
}

void animate() {
	js_moveBox(5, 0);
}
