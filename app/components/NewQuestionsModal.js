import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import helpers from "./utils/helpers";
const uuidv4 = require('uuid/v4');

class NewQuestionsModal extends React.Component {
  constructor() {
        super();

  this.state = {
    showModal: false, 
    title: "",
    category: "",
    questions: "",
    uniqueLink: "",
    uuid: ""
  };

  this.open = this.open.bind(this);
  this.close = this.close.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleSetTitle = this.handleSetTitle.bind(this);
  this.handleSetCategory = this.handleSetCategory.bind(this);
  this.handleSetQuestions = this.handleSetQuestions.bind(this);
}

open() {
  this.setState({showModal: true});
  var uniqueLink = this.generateUniqueLink();
}

close() {
  this.setState({showModal: false});
}

generateUniqueLink() {
  var uuid = uuidv4();
  var uniqueLink = window.location.href + 'qa/' + uuid;
  this.setState({uuid: uuid});
  this.setState({uniqueLink: uniqueLink});
  return uniqueLink;
}

// This function will respond to the user input
handleSetTitle(event) {
  this.setState({ title: event.target.value });
}

handleSetCategory(event) {
  this.setState({ category: event.target.value });
}

handleSetQuestions(event) {
  this.setState({ questions: event.target.value });
}


// When a user submits...
handleSubmit (event) {
  // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
  // clicking the button
  event.preventDefault();

  var obj = {      
    title: this.state.title,
    category: this.state.category,
    questions: this.state.questions
  };
  helpers.postSaved(obj).then(function(response) {
    this.props.setInfo(this.state.title, this.state.category, this.state.questions);
      console.log("============================= in handleSubmint");
      console.log(this.state.title, this.state.category, this.state.questions);
  }.bind(this))

  // this.props.setBeginDate(this.state.begin_date);
  this.setState({ title: "", category: "", questions: "" });
}

render() {
  return(
    <div>
      <Button onClick={this.open} type="button" bsSize="small"  bsStyle="info">
          <span className="glyphicon glyphicon-plus"></span>
                &nbsp;New Question List
      </Button>
      <div>
        <Modal className="modal-container" 
          show={this.state.showModal} 
          onHide={this.close}
          animation={true}>
          <form>
            <Modal.Header closeButton>
              <Modal.Title>Create New Question List</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>
                <strong>Unique Link:</strong> {this.state.uniqueLink}
              </p>

              <div className="form-group">
                <label htmlFor="input-title" className="">
                  Title
                </label>

                <input
                  value={this.state.title}
                  type="text"
                  className="form-control"
                  id="title"
                  onChange={this.handleSetTitle}
                  required
                  name="input-title"
                />
              </div>

              <div className="form-group">
                <label htmlFor="input-category" className="">
                    Category
                </label>

                <input
                  value={this.state.category}
                  type="text"
                  className="form-control"
                  id="category"
                  onChange={this.handleSetCategory}
                  required
                  name="input-category"
                />
              </div>

              <div className="form-group">
                <textarea rows="12"
                  value={this.state.questions}
                  type="text"
                  className="form-control"
                  id="questions"
                  onChange={this.handleSetQuestions}
                  required
                  name="input-questions"
                  placeholder="Enter your list of questions here. Separate each question with a line break."
                > 
                </textarea>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
              <Button onClick={this.handleSubmit} bsStyle="info"
                type="submit"
                >
                Create New List
              </Button>
            </Modal.Footer>   
          </form>      
        </Modal> 
      </div>
    </div>
  );
 }
}

export default NewQuestionsModal;