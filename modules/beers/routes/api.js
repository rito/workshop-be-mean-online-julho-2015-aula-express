var express = require('express');
var router = express.Router();
var Controller = require('./../controller');

router.get('/', Controller.retrieve);
router.get('/:id', Controller.get);

router.post('/', Controller.create);

module.exports = router;