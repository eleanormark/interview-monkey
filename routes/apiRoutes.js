var express = require('express');
var router = express.Router();
var apiController = require('../controllers/apiController');

// This is the route we will send GET requests to retrieve our most recent list of questions.
// We will call this route the moment our page gets rendered
router.get('/questionList', apiController.getQuestionList);

router.get('/visibleQuestionList', apiController.getVisibleQuestionList);

// This is the route we will send POST requests to save each list of questions.
router.post('/questionList', apiController.postQuestionList);

// This is the route we will send PUT requests to delete each list of questions.
router.put('/questionList', apiController.deleteQuestionList);

router.get('/questionsuuid', apiController.getQuestionsforUUID);

router.put('/answers', apiController.postAnswerList);

router.put('/comments', apiController.postResponseCommet);

router.put('/response', apiController.deleteResponse);

module.exports = router;
