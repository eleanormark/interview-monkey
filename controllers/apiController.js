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

module.exports.getQuestionsforUUID = function (req, res) {
  QuestionList.find({ uuid: req.query.uuid }).sort([
    ["date", "descending"]
  ]).exec(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
      console.log(doc)
    }
  });
}

module.exports.postQuestionList= function(req, res) {
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
  })
}

module.exports.postAnswerList = function(req, res) {
  QuestionList.findOne({_id: req.body.questionID}, function (err, questModel) {

    var tmpObj = {
      intervieweeFullName: req.body.fullname,
      intervieweePosition: req.body.position,
      intervieweeEmail: req.body.email,
      answers: req.body.answers
    }
    questModel.responses.push(tmpObj);
  
    questModel.save(function (err) {
        if(err) {
            console.error('ERROR!');
        }
    });
});

}

module.exports.deleteQuestionList = function(req, res) {
    QuestionList.remove({ _id: req.body._id}, function(err) {
        if (!err) {
            res.send("DELETED!");
        } else {
            console.log(err);
        }
    });
}