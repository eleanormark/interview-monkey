import React from "react";
import Editor from "./Editor";
import helpers from "./utils/helpers";
import ReactMarkdown from "react-markdown";

class InterviewQA extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      questions: [],
      fullname: "",
      position: "",
      email: "",
      questionID: "",
      responseData: null
    };

    this.handleSend = this.handleSend.bind(this);
    this.handleSetFullName = this.handleSetFullName.bind(this);
    this.handleSetPosition = this.handleSetPosition.bind(this);
    this.handleSetEmail = this.handleSetEmail.bind(this);
  }
  componentDidMount() {
    var str = window.location.href;
    var n = str.search("/#/qa/");
    var uuid = str.slice(n + 6);

    if (!this.state.responseData) {
      helpers.getQuestionsWithUUID(uuid).then(
        function(response) {
          this.setState({ responseData: response.data });
          this.setState({ questions: response.data[0].questions });
          this.setState({ title: response.data[0].title });
          this.setState({ questionID: response.data[0]._id });
        }.bind(this)
      );
    }
  }

  handleSend(event) {
    event.preventDefault();

    var responseObj = {
      questionID: this.state.questionID,
      title: this.state.title,
      fullname: "",
      position: "",
      eamil: "",
      answers: []
    };

    responseObj.fullname = document.getElementById("fullname").value.trim();
    responseObj.position = document.getElementById("position").value.trim();
    responseObj.email = document.getElementById("email").value.trim();

    this.state.responseData[0].questions.map(function(element, index) {
      var ans = document
        .getElementById("id_answer_" + index)
        .getAttribute("data-snippet");
      responseObj.answers.push({ answer: ans });
    });

    helpers.postAnswers(responseObj).then(function(response) {}.bind(this));
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
    if (!this.state.responseData) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container">
        <h2>
          {this.state.title}
        </h2>
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
                Position: &nbsp;
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

          {this.state.questions.map(
            function(quest, i) {
              return (
                <div key={i}>
                  <ReactMarkdown source={quest.question} />
                  <Editor index={i} />
                </div>
              );
            }.bind(this)
          )}

          <p>&nbsp;</p>

          <button
            onClick={this.handleSend}
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
