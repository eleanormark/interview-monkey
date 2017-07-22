import React from 'react';
import NavbarInstance from './components/NavbarInstance.js';
import Qdiv from './components/qdiv.js';
import ResponseListItem from './components/ResponseListItem';
import helpers from "./components/utils/helpers";
import { Modal, Button } from 'react-bootstrap';

class ResponseList extends React.Component {
    constructor() {
            super();
    
        this.state = { 
            title: "",
            showViewAnsModal: false,
            qaResponseData: null,
            interviewee:"",
            position: "",
            qaList:"",
            cat:"",
            date:"",
            questions:[],
            answers: []
        };

        this.onViewAns = this.onViewAns.bind(this);
        this.openViewAnsModal = this.openViewAnsModal.bind(this);
        this.closeViewAnsModal = this.closeViewAnsModal.bind(this);
    }
    openViewAnsModal() {
    this.setState({showViewAnsModal: true});
    }

    closeViewAnsModal() {
    this.setState({showViewAnsModal: false});
    }
    
    componentDidMount() {
    this.getSavedInterveiwQuestionList();
    }

    getSavedInterveiwQuestionList() {
        if ( !this.state.qaResponseData) {
            helpers.getSavedQuestionList().then(function(response) {
                this.setState({ qaResponseData: response.data });
                console.log(this.state.qaResponseData);
            }.bind(this));
        }
    }
   
    onViewAns(res1, res2) {
        this.setState({interviewee: res2.intervieweeFullName});
        this.setState({position: res2.intervieweePosition});
        this.setState({answers: res2.answers});
        this.setState({date: res2.date.substring(0,10)});
        this.setState({qaList: res1.title});
        this.setState({cat: res1.category});
        this.setState({questions: res1.questions});
        
        this.openViewAnsModal();
    }

    render() {
        var that = this;

        if ( !this.state.qaResponseData) {
            return (
            <div>Loading...</div>
            );
        }

        return(
                <div>
                    <NavbarInstance />
                    <div className="container">
                        <h3 className="page-header">Responses</h3>
                        <table className="table" id="response-list-table">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Question List</th>
                                <th>Category</th>
                                <th>Replied Date</th>
                                <th>Delete</th>
                                <th>View</th>
                            </tr>
                            </thead>
                            <tbody>
                                
                                { this.state.qaResponseData.map(function(res1,i){
   
                                  return(
                                    res1.responses.map(function(res2, j){
                                         return (
                                            <ResponseListItem 
                                                res1={res1} 
                                                res2={res2} 
                                                onViewAnswers={ that.onViewAns } 
                                                key={j+"res2"}
                                            />
                                         )
                                    })
                                  )
                                  }.bind(this))
                                }
                                
                            </tbody>
                        </table>
                        <div>
                            <Modal className="modal-container" 
                                show={this.state.showViewAnsModal} 
                                onHide={this.closeViewAnsModal}
                                animation={true}>
                            <form>
                                <Modal.Header closeButton>
                                    <Modal.Title>Name:  {this.state.interviewee}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  

                                </Modal.Body>
                                <div className="container">
                                    
                                    {this.state.answers.map(function(ans, i) {
                                        return (
                                            <Qdiv info={ans} index= {i} key={i + "z"} />
                                         );
                                    }.bind(this))}
                                </div>
                                <div>...</div>
                                <Modal.Footer>
                                <Button onClick={this.closeViewAnsModal}>Close</Button>
                                <Button bsStyle="info"
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

export default ResponseList;