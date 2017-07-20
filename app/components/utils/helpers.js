// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Helper functions for making API Calls
var helper = {
  // getQuestionList: function(uuid) {
    
  // },

  // This function hits our own server to retrieve the record of query results
  getSavedQuestionList: function() {
    return axios.get("/api/questionList");
  },

  // This function posts new question list to our database.
  postQuestionList: function(obj) {
      alert("in helper.js  postQuestionList =======");
    
    return axios.post("/api/questionList", {
      title: obj.title,
      category: obj.category,
      questions: obj.questions,
      uuid: obj.uuid,
      url: obj.url
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