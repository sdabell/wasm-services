/**
 *  Gateway to process arithmetic requests and forward requests with wasm to worker nano service nodes
 */

const fs = require('fs');
const buf = fs.readFileSync('../nanoServices/arithmeticServices.wasm');
const bufAdd = fs.readFileSync('../nanoServices/addService.wasm');
const bufSub = fs.readFileSync('../nanoServices/subService.wasm');
const bufMult = fs.readFileSync('../nanoServices/multService.wasm');
const bufDiv = fs.readFileSync('../nanoServices/divService.wasm');
//const buf = fs.readFileSync('../wasm/a.out.wasm');
//const buf = fs.readFileSync('./add.wasm');                                    
let typedArray = new Uint8Array(buf);
let res;
let count = 0;
let importObject = { imports: { imported_func: arg => console.log(arg) } };

const env = {
    memoryBase: 0,
    tableBase: 0,
    memory: new WebAssembly.Memory({
      initial: 256
    }),
    table: new WebAssembly.Table({
      initial: 0,
      element: 'anyfunc'
    })
  }

const myMethod = async (bytes) => {
    res = await new WebAssembly.instantiate(bytes, importObject);
    const { add } = res.instance.exports;
    let letter = 4;
    console.log(add(1,2));
    const { sub } = res.instance.exports;
    console.log(sub(3,4));
    if (count < 10) {
        count++;
        myMethod(bytes);
    } else {
    }
}

myMethod(buf).catch( e => { console.error(e) } );
console.log(res);

//    const { add3 } = res.instance.exports;                                    
//add = WebAssembly.Module.cwrap(
//    'add', 'number', ['number', 'number']
//);
