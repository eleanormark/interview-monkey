const assert = require('assert');
const mongoose = require('mongoose');
const Interviewer = require('../models/Interviewer');
const Survey = require('../models/Survey');

// Describe our tests
describe('Nesting records', function() {
  beforeEach(function(done) {
    // Drop the collection
    mongoose.connection.collections.interviewers.drop(function() {
      done();
    });
  });

  // Create tests
  it('Creates an interviewer with sub-documents', function(done) {
    var interviewer = new Interviewer({
      userName: 'Monkey007',
      email: 'test@test.com'
    });

    var newSurvey = new Survey({ title: 'Round One' });

    interviewer.save().then(function() {
      newSurvey.save().then(function() {
        Interviewer.update(
          { userName: 'Monkey007' },
          { $push: { surveys: newSurvey._id } }
        ).then(function() {
          Interviewer.findOne({ userName: 'Monkey007' }).then(function(record) {
            assert(record.surveys.length === 1);
            done();
          });
        });
      });
    });
  });

  it('Add questions to a survey', function(done) {
    var interviewer = new Interviewer({
      userName: 'Monkey007',
      email: 'test@test.com'
    });

    var newSurvey = new Survey({
      title: 'Round Two',
      questions: [{ question: 'Show Fizzbuzz solution' }]
    });

    newSurvey.questions.push({ question: 'What does REST means' });

    interviewer.save().then(function() {
      newSurvey.save().then(function() {
        Interviewer.update(
          { userName: 'Monkey007' },
          { $push: { surveys: newSurvey._id } }
        ).then(function() {
          Survey.findOne({ title: 'Round Two' }).then(function(record) {
            console.log('==================');
            console.log(record);
            console.log('==================');
            assert(record.questions.length === 2);
            done();
          });
        });
      });
    });
  });

  it('Add response to a survey', function(done) {
    var interviewer = new Interviewer({
      userName: 'Monkey007',
      email: 'test@test.com'
    });

    var newSurvey = new Survey({
      title: 'Round 3',
      questions: [{ question: 'Show Fizzbuzz solution' }]
    });

    newSurvey.responses.push({
      answer: 'buzz buzz buzz',
      questionID: newSurvey.questions[0]._id
    });

    interviewer.save().then(function() {
      newSurvey.save().then(function() {
        Interviewer.update(
          { userName: 'Monkey007' },
          { $push: { surveys: newSurvey._id } }
        ).then(function() {
          Survey.findOne({ title: 'Round 3' }).then(function(record) {
            console.log('==================');
            console.log(record);
            console.log('==================');
            assert(record.responses.length === 1);
            done();
          });
        });
      });
    });
  });
});
