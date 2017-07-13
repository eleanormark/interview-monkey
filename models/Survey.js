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

var SurveySchema = new Schema({
  authorEmail: {
   type: String
 },
  title: {
    type: String
  },
  uuid: {
    type: String
  },
  questions: [QuestionSchema],
  responses: [ResponseSchema],
  date: {
    type: Date,
    default: Date.now
  }
});

var Survey = mongoose.model("Survey", SurveySchema);
module.exports = Survey;