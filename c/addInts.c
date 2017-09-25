#include <emscripten/emscripten.h>

int main() {
	printf("WebAssembly Module Loaded");
}

int addInts(int a, int b) {
	return a + b;
}