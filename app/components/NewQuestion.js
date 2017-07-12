import React from 'react';

class NewQuestion extends React.Component {
    constructor() {
        super();
        this.state = { question: '' }
    }

    onInputChange(question) {
        this.setState({question});
        this.props.onTermChange(question);
    }

    render() {
        return (
            <div>
                <input onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
}

export default NewQuestion;