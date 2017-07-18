var QuestionList = require ('../models/QuestionList');

 module.exports.getQuestionList = function (req, res) {

  QuestionList.find({}).sort([
    ["date", "descending"]
  ]).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
}

module.exports.postQuestionList= function(req, res) {

  QuestionList.create({
    title: req.body.title,
    category: req.body.category,
    questions: req.body.questions,
    date: Date.now()
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("========================= Saved Search");
    }
  });
}

module.exports.deleteQuestionList = function(req, res) {
    console.log(req.body);
    QuestionList.remove({ _id: req.body._id}, function(err) {
        if (!err) {
            res.send("DELETED!");
        } else {
            console.log(err);
        }
    });
}