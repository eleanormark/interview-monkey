var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  userName: {
    type: String
  },
  email: {
    type: String
  },
  questionList: [{
    type: Schema.ObjectId,
    ref: 'QuestionList'
    }],
  date: {
    type: Date,
    default: Date.now
  }
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
