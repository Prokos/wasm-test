mkdir -p wasm
emcc c/app.c \
	-O3 \
	-o wasm/app.wasm \
	-s WASM=1 \
	-s SIDE_MODULE=1