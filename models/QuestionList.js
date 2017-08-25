var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  question: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var AnswerSchema = new Schema({
  answer: {
    type: String
  }
});

var ResponseSchema = new Schema({
  intervieweeFullName: {
    type: String
  },
  intervieweeEmail: {
    type: String
  },
  intervieweePosition: {
    type: String
  },
  answers: {
    type: [AnswerSchema]
  },
  status: {
    type: String
  },
  comment: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var QuestionListSchema = new Schema({
  title: {
    type: String
  },
  category: {
    type: String
  },
  uuid: {
    type: String
  },
  url: {
    type: String
  },
  questions: [QuestionSchema],
  responses: [ResponseSchema],
  date: {
    type: Date,
    default: Date.now
  },
  isVisibleQuestionListPage: {
    type: Boolean,
    default: true
  }
});

var QuestionList = mongoose.model('QuestionList', QuestionListSchema);
module.exports = QuestionList;
