var express = require ('express');
var router = express.Router();
var apiController = require('../controllers/apiController');

// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
router.get("/saved", apiController.getArticles);

// This is the route we will send POST requests to save each article.
router.post("/saved", apiController.postArticle);

// This is the route we will send PUT requests to delete each article.
router.put("/saved", apiController.deleteArticle);

module.exports = router;