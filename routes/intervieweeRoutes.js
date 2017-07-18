var express = require ('express');
var router = express.Router();
var apiController = require('../controllers/apiController');

// This is the route we will send GET requests to retrieve our most recent list of questions.
// We will call this route the moment our page gets rendered
router.get("/questionListForm", apiController.getQuestionList);


module.exports = router;