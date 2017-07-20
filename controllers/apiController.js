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
  console.log("=======================in apiController postQuestionList")

  console.log(req.body.questions)

  var newQuestionList  = new QuestionList ({
    title: req.body.title,
    category: req.body.category,
    uuid: req.body.uuid,
    url: req.body.url,
    date: Date.now()
  });

  req.body.questions.forEach(function(quest){
    if (quest !== ''){ 
       newQuestionList.questions.push({question:quest});
    }
  });
  
  newQuestionList.save(function (err) {
    if (err) return handleError(err);
    console.log("saved new list");
  })
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