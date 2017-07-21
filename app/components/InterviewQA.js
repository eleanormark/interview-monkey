import React from 'react';
import InterviewQAItem from './InterviewQAItem';
import helpers from "./utils/helpers";

class InterviewQA extends React.Component {

  constructor() {
        super();
  var str= "How can you traverse binary tree?"
  this.state = { 
    fullname: "",
    position: "",
    email: "",
    title: "10 Questions on Data Structures and Algorithms",
    category: "Round One",
    questions: [str,str,str],
    answers: [],
    responseData: []
  };

  this.handleSend = this.handleSend.bind(this);
  this.handleSetFullName = this.handleSetFullName.bind(this);
  this.handleSetPosition = this.handleSetPosition.bind(this);
  this.handleSetEmail = this.handleSetEmail.bind(this);
}
  componentDidMount() {
 
    var str = window.location.href
    var n = str.search("/#/qa/");
    var uuid = str.slice(n+6);

    helpers.getQuestionsWithUUID(uuid).then(function(response) {
         console.log("response +++++++++++++++++");
         console.log(response.data);


      if (response.data !== this.state.responseData) {
           this.setState({ responseData: response.data });
      }
    }.bind(this));
  }

  handleSend() {
    event.preventDefault();

    var arr = [];
    var responseObj = {      
      title: this.state.title,
      fullname: "",
      position: "",
      eamil: "",
      responses: []
    };

    responseObj.fullname = document.getElementById('fullname').value.trim();
    responseObj.position = document.getElementById('position').value.trim();
    responseObj.email = document.getElementById('email').value.trim();
  
    this.state.questions.map(function(element, index) {
      var ans = document.getElementById('textarea_'+ index).value.trim();
      responseObj.responses.push(ans);
    });
    
  }

  handleSetFullName(event) {
     this.setState({ fullname: event.target.value });
  }

  handleSetPosition(event) {
     this.setState({ position: event.target.value });
  }

  handleSetEmail(event) {
     this.setState({ email: event.target.value });
  }

  render() {
    return(
      <div className="container">
        <h2>{this.state.title}</h2>
        <hr />
        <form className="">
          <div className="row">
            <div className="form-group col-sm-4">
              <label htmlFor="fullname" className="">
                FullName: &nbsp; 
              </label>

              <input
                value={this.state.fullname}
                type="text"
                className="form-control"
                id="fullname"
                onChange={this.handleSetFullName} 
                placeholder="FirstName LastName"
                required
                name="fullname"
              />
                
            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="position" className="">
                  Position:  &nbsp;
              </label>

              <input
                value={this.state.position}
                type="text"
                className="form-control"
                id="position"
                onChange={this.handleSetPosition}
                required
                placeholder="Senior Developer"
                name="position"
              />

            </div>
            <div className="form-group col-sm-4">
              <label htmlFor="email" className="">
                  Email: &nbsp; 
              </label>

              <input
                value={this.state.email}
                type="text"
                className="form-control"
                id="email"
                onChange={this.handleSetEmail}
                required
                placeholder="example@email.com"
                name="email"
              />
          
            </div>
          </div>
          
            {this.state.questions.map(function(quest, i) {
              return (
                <InterviewQAItem question={quest} qaID={i} key={i} />
              );
            }.bind(this))}
         
            <button onClick={this.handleSend}
              className="btn btn-default"
              type="submit"
            >
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default InterviewQA;