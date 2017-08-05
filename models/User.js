import  mongoose from 'mongoose';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  questionList: [{
    type: Schema.ObjectId,
    ref: 'QuestionList'
    }],
  date: {
    type: Date,
    default: Date.now
  },
  hash: String,
  salt: String
});

UserSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

UserSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    email: this.email,
    name: this.name,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

var User = mongoose.model("user", UserSchema);
module.exports = User;
