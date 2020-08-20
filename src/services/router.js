const fs = require('fs');
const buf = fs.readFileSync('../nanoServices/arithmeticServices.wasm');
const bufAdd = fs.readFileSync('../nanoServices/addService.wasm');
const bufSub = fs.readFileSync('../nanoServices/subService.wasm');
const bufMult = fs.readFileSync('../nanoServices/multService.wasm');
const bufDiv = fs.readFileSync('../nanoServices/divService.wasm');

const express = require('express');
const router = express.Router();
let importObject = { imports: { imported_func: arg => console.log(arg) } };

router.get('/arithmetic/add', (req, res) => {
    console.log(`received add request ${req.query.x} ${req.query.y}`);
    const bufAdd = fs.readFileSync('../nanoServices/addService.wasm');
    let result;
    let count = 0;
    let typedArray = new Uint8Array(bufAdd);
    // TODO: send bufAdd along with req parameters to a generic work server
    const myMethod = async (bytes, x, y) => {
      result = await new WebAssembly.instantiate(bytes, importObject);
      const { add } = result.instance.exports;
      console.log(add(x,y));
      res.status(200);
      res.send(`${req.query.x} + ${req.query.y} =  ${add(x, y)}`);
    }
    myMethod(bufAdd, req.query.x, req.query.y).catch( e => { console.error(e) } );
});

router.get('/arithmetic/sub', (req, res) => {
    console.log(`received sub request ${req.query.x} ${req.query.y}`);
    const bufSub = fs.readFileSync('../nanoServices/subService.wasm');
    // TODO: send bufSub along with req parameters to a generic work server
    const myMethod = async (bytes, x, y) => {
      result = await new WebAssembly.instantiate(bytes, importObject);
      const { sub } = result.instance.exports;
      console.log(sub(x,y));
      res.status(200);
      res.send(`${req.query.x} - ${req.query.y} =  ${sub(x, y)}`);
    }
    myMethod(bufSub, req.query.x, req.query.y).catch( e => { console.error(e) } );
});

router.get('/arithmetic/mult', (req, res) => {
    console.log(`received mult request ${req.query.x} ${req.query.y}`);
    const bufMult = fs.readFileSync('../nanoServices/multService.wasm');
    // send bufMult along with req parameters to a generic work server
    // TODO: send bufMult along with req parameters to a generic work server
    const myMethod = async (bytes, x, y) => {
      result = await new WebAssembly.instantiate(bytes, importObject);
      const { mult } = result.instance.exports;
      console.log(mult(x,y));
      res.status(200);
      res.send(`${req.query.x} * ${req.query.y} =  ${mult(x, y)}`);
    }
    myMethod(bufMult, req.query.x, req.query.y).catch( e => { console.error(e) } );
});

router.get('/arithmetic/div', (req, res) => {
    console.log(`received div request ${req.query.x} ${req.query.y}`);
    const bufDiv = fs.readFileSync('../nanoServices/divService.wasm');
    // TODO: send bufDiv along with req parameters to a generic work server
    const myMethod = async (bytes, x, y) => {
      result = await new WebAssembly.instantiate(bytes, importObject);
      const { div } = result.instance.exports;
      console.log(div(x,y));
      res.status(200);
      res.send(`${req.query.x} / ${req.query.y} =  ${div(x, y)}`);
    }
    myMethod(bufDiv, req.query.x, req.query.y).catch( e => { console.error(e) } );
});

module.exports = router;
