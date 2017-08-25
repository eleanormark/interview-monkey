import React from "react";
import NavbarInstance from "./components/NavbarInstance.js";
import Answer from "./components/Answer.js";
import ResponseListItem from "./components/ResponseListItem";
import helpers from "./components/utils/helpers";
import { Modal, Button } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

class ResponseList extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      showViewAnsModal: false,
      qaResponseData: null,
      interviewee: "",
      email: "",
      position: "",
      qaList: "",
      cat: "",
      repliedDate: "",
      questions: [],
      answers: [],
      status: "",
      comment: "",
      questionList_id: "",
      response_id: "",
      comment: "",
      status: ""
    };

    this.onViewAns = this.onViewAns.bind(this);
    this.onRemoveRes = this.onRemoveRes.bind(this);
    this.openViewAnsModal = this.openViewAnsModal.bind(this);
    this.closeViewAnsModal = this.closeViewAnsModal.bind(this);
    this.handleSetStatus = this.handleSetStatus.bind(this);
    this.handleSetComment = this.handleSetComment.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.getSavedInterveiwQuestionList = this.getSavedInterveiwQuestionList.bind(
      this
    );
  }
  openViewAnsModal() {
    this.setState({ showViewAnsModal: true });
  }

  closeViewAnsModal() {
    this.setState({ showViewAnsModal: false });
  }

  componentDidMount() {
    this.getSavedInterveiwQuestionList();
  }

  getSavedInterveiwQuestionList() {
    if (!this.state.qaResponseData) {
      helpers.getSavedQuestionList().then(
        function(response) {
          this.setState({ qaResponseData: response.data });
        }.bind(this)
      );
    }
  }

  onViewAns(res1, res2) {
    this.setState({ interviewee: res2.intervieweeFullName });
    this.setState({ email: res2.intervieweeEmail });
    this.setState({ position: res2.intervieweePosition });
    this.setState({ answers: res2.answers });
    this.setState({ repliedDate: res2.date.substring(0, 10) });
    this.setState({ qaList: res1.title });
    this.setState({ cat: res1.category });
    this.setState({ questions: res1.questions });
    this.setState({ questionList_id: res1._id });
    this.setState({ response_id: res2._id });
    this.setState({ status: res2.status });
    this.setState({ comment: res2.comment });

    this.openViewAnsModal();
  }

  onRemoveRes(quest_id, resp_id) {
    var obj = {
      quest_id: quest_id,
      resp_id: resp_id
    };

    helpers.deleteResponse(obj).then(
      function(response0) {
        helpers.getSavedQuestionList().then(
          function(response) {
            this.setState({ qaResponseData: response.data }).bind(this);
          }.bind(this)
        );
      }.bind(this)
    );
  }

  handleSetStatus(event) {
    this.setState({ status: event.target.value });
  }

  handleSetComment(event) {
    this.setState({ comment: event.target.value });
  }

  handleSave(event) {
    event.preventDefault();

    var obj = {
      comment: this.state.comment,
      status: this.state.status,
      res_id: this.state.response_id,
      qList_id: this.state.questionList_id
    };

    helpers.postResponseComments(obj).then(
      function(response0) {
        helpers.getSavedQuestionList().then(
          function(response) {
            this.setState({ qaResponseData: response.data });
          }.bind(this)
        );
      }.bind(this)
    );
  }

  render() {
    var that = this;

    if (!this.state.qaResponseData) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <NavbarInstance />
        <div className="container">
          <div className="container2">
            <div className="table-top font-23">Responses</div>
            <table className="table table-hover" id="response-list-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Quest List</th>
                  <th>Quest Cat</th>
                  <th>Replied Date</th>
                  <th>Status</th>
                  <th>Remove</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {this.state.qaResponseData.map(
                  function(res1, i) {
                    return res1.responses.map(function(res2, j) {
                      return (
                        <ResponseListItem
                          res1={res1}
                          res2={res2}
                          onViewAnswers={that.onViewAns}
                          onRemoveResponse={that.onRemoveRes}
                          key={j + "res2"}
                        />
                      );
                    });
                  }.bind(this)
                )}
              </tbody>
            </table>
          </div>
          <div>
            <Modal
              className="modal-container"
              bsSize="large"
              show={this.state.showViewAnsModal}
              onHide={this.closeViewAnsModal}
              animation={true}
            >
              <form>
                <Modal.Header closeButton>
                  <Modal.Title>
                    Name: {this.state.interviewee}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    <div>
                      Position: {this.state.position}
                    </div>
                    <div>
                      Email: {this.state.email}
                    </div>
                    <div>
                      Replied Date: {this.state.repliedDate}
                    </div>
                    <ReactMarkdown source={this.state.qaList} />
                    <br />
                    {this.state.answers.map(
                      function(ans, i) {
                        return (
                          <div>
                            <p>
                              <strong>
                                {this.state.questions[i].question}
                              </strong>
                            </p>
                            <Answer info={ans} index={i} key={i + "z"} />
                            <br />
                          </div>
                        );
                      }.bind(this)
                    )}

                    <div className="form-group">
                      <label htmlFor="input-category" className="">
                        Status:
                      </label>

                      <input
                        value={this.state.status}
                        id="modal-status"
                        type="text"
                        className="form-control"
                        onChange={this.handleSetStatus}
                        required
                        name="input-status"
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        rows="6"
                        value={this.state.comment}
                        id="modal-comment"
                        type="text"
                        className="form-control"
                        onChange={this.handleSetComment}
                        required
                        name="input-comment"
                        placeholder="Enter comments."
                      />
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.closeViewAnsModal}>Close</Button>
                  <Button
                    onClick={this.handleSave}
                    bsStyle="info"
                    type="submit"
                    className="btn-outline"
                  >
                    Save
                  </Button>
                </Modal.Footer>
              </form>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default ResponseList;
