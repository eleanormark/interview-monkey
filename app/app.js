import React from 'react';
import ReactDOM from 'react-dom';
import NewQuestion from './components/NewQuestion';
import RecordRTC from 'recordrtc';

const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia || navigator.msGetUserMedia);

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            src: null
        }
        
        this.requestUserMedia = this.requestUserMedia.bind(this);
    };

    componentDidMount() {
        if(!hasGetUserMedia) {
            alert("Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.");
            return;
        }
            this.requestUserMedia();
    }

    requestUserMedia() {
        console.log('requestUserMedia');
    }

    render() {
        return (
            <div>
                <NewQuestion />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));