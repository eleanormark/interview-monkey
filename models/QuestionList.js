var mongoose = require("mongoose");
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

var ResponseSchema = new Schema({
  questionID: {
    type: String
  },
  intervieweeName: {
    type: String 
  },
  intervieweeEmail: {
    type: String 
  },
  answer: {
    type: String
  },
  videoURL: {
    type: String
  },
  answerRating: {
    type: Number
  },
  interviewerComment: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

var QuestionListSchema = new Schema({
  authorEmail: {
   type: String
 },
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
  }
});

var QuestionList = mongoose.model("QuestionList", QuestionListSchema);
module.exports = QuestionList;