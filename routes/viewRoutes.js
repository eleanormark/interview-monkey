var express = require('express');
var router = express.Router();
var viewController = require('../controllers/viewController');

module.exports = router.get('*', viewController.index);
