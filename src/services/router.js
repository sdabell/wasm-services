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
    // send bufAdd along with req parameters to a generic work server
    
    res.status(200);
    res.send((parseInt(req.query.x) + parseInt(req.query.y)).toString());
});

router.get('/arithmetic/sub', (req, res) => {
    console.log(`received sub request ${req.query.x} ${req.query.y}`);
    const subAdd = fs.readFileSync('../nanoServices/subService.wasm');
    // send bufAdd along with req parameters to a generic work server

    res.status(200);
    res.send((parseInt(req.query.x) - parseInt(req.query.y)).toString());
});

router.get('/arithmetic/mult', (req, res) => {
    console.log(`received mult request ${req.query.x} ${req.query.y}`);
    const multAdd = fs.readFileSync('../nanoServices/multService.wasm');
    // send bufAdd along with req parameters to a generic work server

    res.status(200);
    res.send((parseInt(req.query.x) * parseInt(req.query.y)).toString());
});

router.get('/arithmetic/div', (req, res) => {
    console.log(`received div request ${req.query.x} ${req.query.y}`);
    const divAdd = fs.readFileSync('../nanoServices/divService.wasm');

    res.status(200);
    res.send((parseInt(req.query.x) / parseInt(req.query.y)).toString());
});

module.exports = router;
