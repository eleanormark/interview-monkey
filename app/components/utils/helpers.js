// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Helper functions for making API Calls
var helper = {

  // This function hits our own server to retrieve the record of query results
  getSavedQuestionList: function() {
    return axios.get("/api/questionList");
  },

  getQuestionsWithUUID: function(_uuid) {
    return axios.get("/api/questionsuuid?uuid=" + _uuid);
  },

  // This function posts new question list to our database.
  postQuestionList: function(obj) {    
    return axios.post("/api/questionList", {
      title: obj.title,
      category: obj.category,
      questions: obj.questions,
      uuid: obj.uuid,
      url: obj.url
    });
  },

  postAnswers: function(obj) {
    console.log("==================in helper");
    console.log(obj.fullname);
    alert("in helper");
    return axios.put("/api/answers", {
      questionID: obj.questionID,
      fullname: obj.fullname,
      title: obj.title,
      position: obj.position,
      email: obj.email,
      answers: obj.answers
    });
  },

 // This function deletes new question list to our database.
  deleteSavedQuestionList: function(id) {
      console.log(id);
      return axios.put("/api/questionList", {
          _id: id
      });
  },
};

module.exports = helper;