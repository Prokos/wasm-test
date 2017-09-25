mkdir -p wasm
emcc c/addInts.c \
	-O3 \
	-o wasm/addInts.wasm \
	-s WASM=1 \
	-s SIDE_MODULE=1