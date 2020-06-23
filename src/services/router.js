const express = require('express');
const router = express.Router();

router.get('/arithmetic/add', (req, res) => {
    console.log(`received a request ${req.query.x} ${req.query.y}`);
    res.status(200);
    res.send(req.query.x + req.query.y);
});

router.get('/arithmetic/sub', (req, res) => {

});

router.get('/arithmetic/mult', (req, res) => {

});

router.get('/arithmetic/div', (req, res) => {

});

module.exports = router;
