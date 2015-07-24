var express = require('express');
var router = express.Router();
var Controller = require('./../controller');

/* GET users listing. */
router.get('/', Controller.retrieve);

module.exports = router;