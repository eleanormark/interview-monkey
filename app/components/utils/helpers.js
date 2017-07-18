// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Helper functions for making API Calls
var helper = {

  // This function hits our own server to retrieve the record of query results
  getSaved: function() {
    return axios.get("/api/questionList");
  },

  // This function posts new question list to our database.
  postSaved: function(obj) {
      alert("in postSaved =======");
    return axios.post("/api/questionList", {
      title: obj.title,
      category: obj.category,
      questions: obj.questions
    });
  },

 // This function deletes new question list to our database.
  deleteSaved: function(id) {
      console.log(id);
      return axios.put("/api/questionList", {
          _id: id
      });
  },
};

module.exports = helper;