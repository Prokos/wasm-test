#include <emscripten/emscripten.h>

int main() {
	printf("WebAssembly Module Loaded");
	printf("WebAssembly Module Loaded - привет мир");
}

int addInts(int a, int b) {
	return a + b;
}