var express = require('express');
var router = express.Router();
var Controller = require('./../controller');

router.get('/', Controller.renderList);
router.get('/:id', Controller.renderGet);
router.get('/:id/edit', Controller.renderGet);

module.exports = router;