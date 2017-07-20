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
            objs: [
                {
                    id: 1,
                    title: "fizzbuzz",
                },
                {
                    id: 2,
                    title: 'isPalindrome',
                },
                {
                    id: 3,
                    title: 'letter count'
                }
            ]
        }
        
        this.requestUserMedia = this.requestUserMedia.bind(this);
        this.setInfo = this.setInfo.bind(this);
        this.deleteList= this.deleteList.bind(this);
        this.editList = this.editList.bind(this);
    };

    componentDidMount() {
        if(!hasGetUserMedia) {
            alert("Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.");
            return;
        }
            this.requestUserMedia();
    }

    deleteList(string) {
        console.log( string, "delelte list ==================");
    }

    editList(string) {
        console.log( string, "edit list =======================");
    }

    requestUserMedia() {
        console.log('requestUserMedia');
    }

    setInfo(title, category, questions) {

        this.setState({ title: title });
        this.setState({ category: category });
        this.setState({ questions: questions });

        console.log("========================= after in setInfo");
        console.log(this.state);
        console.log('+++++++++++++++++++++++++++++++++ questions ')
        console.log(questions)
    }

    setQuestionList() {
        this.setState({})
    }

    render() {
        return (
            <div>
                <NavbarInstance />
                <div className="container">
                    <NewQuestionsModal setInfo={this.setInfo}/>
                    <QuestionList 
                        objs={this.state.objs} 
                        uuid={this.state.uuid}
                        onListDelete={this.deleteList}
                        onListEdit={this.editList}
                    />
                </div>
            </div>
        );
    }
}


export default Main;