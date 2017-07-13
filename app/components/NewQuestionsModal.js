import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class NewQuestionsModal extends React.Component {
    constructor() {
        super();

  this.state = {
    showModal: false, term: ""
  };

  this.open = this.open.bind(this);
  this.close = this.close.bind(this);
}


open() {
  this.setState({showModal: true});
}

close() {
  this.setState({showModal: false});
}

render() {
  return(
    <div>
      <Button onClick={this.open} type="button" className="btn btn-info">
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
              <div className="form-group">
                <label htmlFor="input-title" className="">
                    Title
                </label>

                <input
                    value={this.state.title}
                    type="text"
                    className="form-control"
                    id="term"
                    onChange={this.handleChange}
                    required
                    name="input-title"
                />
        
              </div>

              <div className="form-group">
                <label htmlFor="input-category" className="">
                    Category:
                </label>

                <input
                    value={this.state.category}
                    type="text"
                    className="form-control"
                    id="term"
                    onChange={this.handleChange}
                    required
                    name="input-category"
                />
        
              </div>

              <div className="form-group">
                <textarea rows="12"
                    value={this.state.questions}
                    type="text"
                    className="form-control"
                    id="term"
                    onChange={this.handleChange}
                    required
                    name="input-questions"
                    placeholder="Enter your list of questions here. Separate each question with a line break."
                > 
                </textarea>
      
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.close}>Close</Button>
              <Button bsStyle="warning">Save changes</Button>
            </Modal.Footer>   
          </form>      
        </Modal> 
      </div>
    </div>
  );
 }
}

export default NewQuestionsModal;