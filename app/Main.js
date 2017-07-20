import React from 'react';
import NewQuestionsModal from './components/NewQuestionsModal';
import QuestionList from './components/QuestionList';
import NavbarInstance from './components/NavbarInstance';
import helpers from "./components/utils/helpers";
import RecordRTC from 'recordrtc';
const uuidv4 = require('uuid/v4');

const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia || navigator.msGetUserMedia);

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            src: null,
            title: "",
            category: "",
            questions: "",
            questionLists: [],
            uuid: "",
            savedQuestionList: []
        }
        
        this.requestUserMedia = this.requestUserMedia.bind(this);
        this.deleteList= this.deleteList.bind(this);
        this.editList = this.editList.bind(this);
    };

    // componentDidMount() {
    //     if(!hasGetUserMedia) {
    //         alert("Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.");
    //         return;
    //     }
    //         this.requestUserMedia();
    // }

    componentDidMount() {
    this.getSavedInterveiwQuestionList();
    }

    getSavedInterveiwQuestionList() {
        helpers.getSavedQuestionList().then(function(response) {
            console.log( "get req +++++++++++++++++++++++++++++++++++++");
            console.log(response);
            console.log(response.data);
            if (response !== this.state.savedQuestionList) {
                this.setState({ savedQuestionList: response.data });
            }
    }.bind(this));
  }

    deleteList(id) {
        console.log( id, "delelte list id ==================");
        helpers.deleteSavedQuestionList(id).then(function(response){
            this.getSavedInterveiwQuestionList();
        }.bind(this))
    }

    editList(string) {
        console.log( string, "edit list =======================");
    }

    requestUserMedia() {
        console.log('requestUserMedia');
    }

    // addInfo(obj) {

    // }

    setQuestionList() {
        this.setState({})
    }

    render() {
        return (
            <div>
                <NavbarInstance />
                <div className="container">
                    <NewQuestionsModal />
                    <QuestionList 
                        objs={this.state.savedQuestionList} 
                        onListDelete={this.deleteList}
                        onListEdit={this.editList}
                    />
                </div>
            </div>
        );
    }
}


export default Main;