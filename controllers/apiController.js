var QuestionList = require("../models/QuestionList");

module.exports.getQuestionList = function(req, res) {
  QuestionList.find({}).sort([["date", "descending"]]).exec(function(err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
    }
  });
};

module.exports.getVisibleQuestionList = function(req, res) {
  QuestionList.find({ isVisibleQuestionListPage: true })
    .sort([["date", "descending"]])
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
      } else {
        res.send(doc);
      }
    });
};

module.exports.getQuestionsforUUID = function(req, res) {
  QuestionList.find({ uuid: req.query.uuid })
    .sort([["date", "descending"]])
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
      } else {
        res.send(doc);
        console.log(doc);
      }
    });
};

module.exports.postQuestionList = function(req, res) {
  var newQuestionList = new QuestionList({
    title: req.body.title,
    category: req.body.category,
    uuid: req.body.uuid,
    url: req.body.url,
    date: Date.now()
  });

  req.body.questions.forEach(function(quest) {
    if (quest !== "") {
      newQuestionList.questions.push({ question: quest });
    }
  });

  newQuestionList.save(function(err) {
    if (err) return handleError(err);
  });
};

module.exports.postAnswerList = function(req, res) {
  QuestionList.findOne({ _id: req.body.questionID }, function(err, questModel) {
    var tmpObj = {
      intervieweeFullName: req.body.fullname,
      intervieweePosition: req.body.position,
      intervieweeEmail: req.body.email,
      answers: req.body.answers
    };

    questModel.responses.push(tmpObj);

    questModel.save(function(err) {
      if (err) {
        console.error("ERROR!");
      }
    });
  });
};

module.exports.postResponseCommet = function(req, res) {
  QuestionList.update(
    { "responses._id": req.body.res_id },
    {
      $set: {
        "responses.$.status": req.body.status,
        "responses.$.comment": req.body.comment
      }
    },
    function(err, model) {
      if (err) {
        console.log(err);
        return res.send(err);
      }
      return res.json(model);
    }
  );
};

module.exports.deleteResponse = function(req, res) {
  QuestionList.findByIdAndUpdate(
    req.body.quest_id,
    { $pull: { responses: { _id: req.body.resp_id } } },
    function(err, model) {
      if (err) {
        console.log(err);
        return res.send(err);
      }
      //Delete current list if response array lenght is 0 and is_visible condition is false.
      QuestionList.findOne({
        _id: req.body.quest_id,
        isVisibleQuestionListPage: false,
        "responses.0": { $exists: false }
      })
        .remove()
        .exec();
      return res.json(model);
    }
  );
};

module.exports.deleteQuestionList = function(req, res) {
  QuestionList.update(
    { _id: req.body._id },
    { $set: { isVisibleQuestionListPage: false } },
    function(err) {
      if (!err) {
        res.send("SUCCESS!");

        //Delete current list if response array lenght is 0.
        QuestionList.findOne({
          _id: req.body._id,
          "responses.0": { $exists: false }
        })
          .remove()
          .exec();
      } else {
        console.log(err);
      }
    }
  );
};
