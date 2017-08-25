import React from "react";
import { Modal, Button } from "react-bootstrap";
import helpers from "./utils/helpers";
const uuidv4 = require("uuid/v4");

class NewQuestionsModal extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      title: "",
      category: "",
      uniqueLink: "",
      uuid: "",
      questions: ""
    };

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSetTitle = this.handleSetTitle.bind(this);
    this.handleSetCategory = this.handleSetCategory.bind(this);
    this.handleSetQuestions = this.handleSetQuestion.bind(this);
  }

  open() {
    this.setState({ showModal: true });
    var uniqueLink = this.generateUniqueLink();
  }

  close() {
    this.setState({ showModal: false });
  }

  generateUniqueLink() {
    var uuid = uuidv4();
    var uniqueLink = window.location.href + "qa/" + uuid;
    this.setState({ uuid: uuid });
    this.setState({ uniqueLink: uniqueLink });
    return uniqueLink;
  }

  // This function will respond to the user input
  handleSetTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleSetCategory(event) {
    this.setState({ category: event.target.value });
  }

  handleSetQuestion(event) {
    this.setState({ questions: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    var str = document.getElementById("questions").value;
    var questarr = str.split("\n\n");

    var obj = {
      title: this.state.title,
      category: this.state.category,
      questions: questarr,
      uuid: this.state.uuid,
      url: this.state.uniqueLink
    };

    helpers.postQuestionList(obj).then(function(response) {}.bind(this));

    this.props.addInfo();
    this.setState({
      title: "",
      category: "",
      questions: "",
      uniqueLink: "",
      uuid: ""
    });
    document.getElementById("questions").value = "";
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.open}
          className="btn-outline new-question-list-btn"
          type="button"
          bsSize="small"
          bsStyle="info"
        >
          <span className="glyphicon glyphicon-plus" />
          &nbsp;New Question List
        </Button>
        <div>
          <Modal
            className="modal-container"
            bsSize="large"
            show={this.state.showModal}
            onHide={this.close}
            animation={true}
          >
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
                  <textarea
                    rows="12"
                    value={this.state.questions}
                    type="text"
                    className="form-control"
                    id="questions"
                    onChange={this.handleSetQuestions}
                    required
                    name="input-questions"
                    placeholder="Enter questions separated by two new line breaks.  Text may be formatted with Markdown."
                  />
                </div>
              </Modal.Body>

              <Modal.Footer>
                <Button onClick={this.close}>Close</Button>
                <Button
                  onClick={this.handleSubmit}
                  className="btn-outline"
                  bsStyle="info"
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
