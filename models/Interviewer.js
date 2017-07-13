var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var InterviewerSchema = new Schema({
  userName: {
    type: String
  },
  email: {
    type: String
  },
  surveys: [{
    type: Schema.ObjectId,
    ref: 'Survey'
    }],
  date: {
    type: Date,
    default: Date.now
  }
});

var Interviewer = mongoose.model("Interviewer", InterviewerSchema);
module.exports = Interviewer;
