import React from 'react';
import InterviewQAItem from './InterviewQAItem';

class InterviewQA extends React.Component {

  constructor() {
        super();

  this.state = { 
    fullname: "",
    position: "",
    email: "",
    title: "10 Questions on Data Structures and Algorithms",
    category: "Round One",
    questions: ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"],
    answers: []
  };

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleSetFullName = this.handleSetFullName.bind(this);
  this.handleSetPosition = this.handleSetPosition.bind(this);
  this.handleSetEmail = this.handleSetEmail.bind(this);
}
  handleSubmit() {
    console.log("handleSubmit");
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
        <form className="" onSubmit={this.handleSubmit}>
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
         
            <button
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