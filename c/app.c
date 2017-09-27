#include "wasm-js.h"

int main() {
	printf("WebAssembly Module Loaded - привет мир");
}

int animate() {
	js_moveBox(5, 0);
}