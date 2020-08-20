# wasm-services

This repo demonstrates using WASM to service API endpoints via an API gateway.  The vision with this repo was to push the workload to a generic WASM worker node with the parameters of the request where the worker executes the WASM executable and returns the result to the client.

This demo uses nodejs as the WASM vm and emscripten as the WASM compiler.

Examlple requests:  the API endpoints are arithmetic functions:
http://127.0.0.1:8080/arithmetic/add?x=3&y=2
Browser returns: 3 + 2 = 5
http://127.0.0.1:8080/arithmetic/sub?x=3&y=2
Browser returns: 3 - 2 = 1
http://127.0.0.1:8080/arithmetic/mult?x=3&y=2
Browser returns: 3 * 2 = 6
http://127.0.0.1:8080/arithmetic/div?x=3&y=2
Browser returns: 3 / 2 = 1

To deploy follow these steps:
1) install inscripten
2) ./emsdk activate --build=Release sdk-incoming-64bit binaryen-master-64bit
3) source ./emsdk_env.sh
4) git clone https://github.com/sdabell/wasm-services.git
5) cd wasm-services/source/services
6) npm install
7) node ApiGateway
The server is listening on 127.0.0.1 and port 8080
8) Use browser to make requests as shown above


![Deployment](https://github.com/sdabell/wasm-services/blob/master/doc/wasm.png)
