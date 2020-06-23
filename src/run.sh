#cd ../../../emscripten/emsdk
#./activate latest
#./emsdk_env.sh
#cd ../../../wasm-services/wasm-services/src
#../../../emscripten/emsdk/activate latest
#../../../emscripten/emsdk/emsdk_env.sh

emcc -s WASM=1 -s EMIT_EMSCRIPTEN_METADATA=1 -s STANDALONE_WASM=1 -s EXPORTED_FUNCTIONS="['_add', '_sub', '_mult', '_div']" nanoServices/arithmeticServices.c -o nanoServices/arithmeticServices.wasm

#emcc -s WASM=1 -s EMIT_EMSCRIPTEN_METADATA=1 -s STANDALONE_WASM=1 –s EXPORTED_FUNCTIONS="['_add', '_sub', '_mult', '_div']"   nanoServices/arithmeticServices.c
