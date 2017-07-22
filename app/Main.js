import React from 'react';
import NewQuestionsModal from './components/NewQuestionsModal';
import QuestionList from './components/QuestionList';
import NavbarInstance from './components/NavbarInstance';
import helpers from "./components/utils/helpers";
import RecordRTC from 'recordrtc';
import { Modal, Button } from 'react-bootstrap';
const uuidv4 = require('uuid/v4');

const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia || navigator.msGetUserMedia);

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            src: null,
            showEditModal: false,
            title: "",
            category: "",
            questions: "",
            questionLists: [],
            uuid: "",
            savedQuestionList: [],
            modalurl: "",
            modaluuid: "",
            modaltitle: "",
            modalcategory: "",
            modalQuestionStr: "",
            modul_id: ""
        }
        
        this.deleteList= this.deleteList.bind(this);
        this.editList = this.editList.bind(this);
        this.addInfo = this.addInfo.bind(this);
        this.openEditModal = this.openEditModal.bind(this);
        this.closeEditModal = this.closeEditModal.bind(this);
        this.handleSubmitEdit = this.handleSubmitEdit.bind(this);
        this.handleEditCategory = this.handleEditCategory.bind(this);
        this.handleEditTitle = this.handleEditTitle.bind(this);
    };

    openEditModal() {
    this.setState({showEditModal: true});
    }

    closeEditModal() {
    this.setState({showEditModal: false});
    }

    componentDidMount() {
    this.getSavedInterveiwQuestionList();
    }

    getSavedInterveiwQuestionList() {
        helpers.getSavedQuestionList().then(function(response) {
            if (response !== this.state.savedQuestionList) {
                this.setState({ savedQuestionList: response.data });
            }
    }.bind(this));
  }

    deleteList(id) {
        helpers.deleteSavedQuestionList(id).then(function(response){
            this.getSavedInterveiwQuestionList();
        }.bind(this))
    }

    handleEditCategory(event) {
        this.setState({ modalcategory: event.target.value });
    }

    handleEditTitle(event) {
        this.setState({modaltitle: event.target.value})
    }

    handleSubmitEdit(event){
        event.preventDefault();

        var str = document.getElementById('questions-modal').value;
        var questarr= str.split("\n\n");

        var obj = {      
            title: this.state.modaltitle,
            category: this.state.modalcategory,
            questions: questarr,
            uuid: this.state.modaluuid,
            url: this.state.modalurl
        };

    helpers.postQuestionList(obj).then(function(response) {

    }.bind(this));

    helpers.deleteSavedQuestionList(this.state.modul_id).then(function(res){
            this.getSavedInterveiwQuestionList();
    }.bind(this));

    this.setState({title:"", category:"", questions:"", uniqueLink:"", uuid:""});
    document.getElementById('questions').value = "";
    }

    editList(obj) {
        this.setState({modul_id: obj._id})
        this.setState({modalurl: obj.url});
        this.setState({modaluuid: obj.uuid});
        this.setState({modaltitle: obj.title});
        this.setState({modalcategory: obj.category})

        var tempStr = "";
        obj.questions.forEach(function(element,i){
            tempStr += element.question +"\n\n";
        })
   
        this.setState({modalQuestionStr: tempStr});
        this.openEditModal();
    }

    addInfo() {
        this.getSavedInterveiwQuestionList();
    }

    setQuestionList() {
        this.setState({})
    }

    render() {
        return (
            <div>
                <NavbarInstance />
                <div className="container">
                    <NewQuestionsModal addInfo={this.addInfo} />
                    <QuestionList 
                        objs={this.state.savedQuestionList} 
                        onListDelete={this.deleteList}
                        onListEdit={this.editList}
                    />

                    <div>
                        <Modal className="modal-container" 
                            show={this.state.showEditModal} 
                            onHide={this.closeEditModal}
                            animation={true}>
                        <form>
                            <Modal.Header closeButton>
                            <Modal.Title>Edit Interview Question List</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                            <p>
                                <strong>Unique Link:</strong> {this.state.modalurl}
                            </p>

                            <div className="form-group">
                                <label htmlFor="input-title" className="">
                                Title
                                </label>

                                <input
                                value={this.state.modaltitle}
                                type="text"
                                className="form-control"
                                id="title"
                                onChange={this.handleEditTitle}
                                required
                                name="input-title"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="input-category" className="">
                                    Category
                                </label>

                                <input
                                value={this.state.modalcategory}
                                type="text"
                                className="form-control"
                                id="category"
                                onChange={this.handleEditCategory}
                                required
                                name="input-category"
                                />
                            </div>

                            <div className="form-group">
                                <textarea rows="12"
                                type="text"
                                className="form-control"
                                id="questions-modal"      
                                required
                                name="input-questions"
                                placeholder="Enter questions separated by two new line breaks."
                                > 
                                    {this.state.modalQuestionStr}
                                </textarea>
                            </div>
                            </Modal.Body>

                            <Modal.Footer>
                            <Button onClick={this.closeEditModal}>Close</Button>
                            <Button onClick={this.handleSubmitEdit} bsStyle="info"
                                type="submit"
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


export default Main;