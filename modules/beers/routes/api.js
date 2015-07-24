var express = require('express');
var router = express.Router();
var Controller = require('./../controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Controller.retrieve(req, res);
});

module.exports = router;