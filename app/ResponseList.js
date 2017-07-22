import React from 'react';
import NavbarInstance from './components/NavbarInstance.js';
import ResponseListItem from './components/ResponseListItem';
import helpers from "./components/utils/helpers";

class ResponseList extends React.Component {
    constructor() {
            super();
    
        this.state = { 
        title: ""
        };
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
  render() {
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
                            <th>QA List</th>
                            <th>Replied Date</th>
                            <th>Status</th>
                            <th>Delete</th>
                            <th>View</th>
                        </tr>
                        </thead>
                        <tbody>
                            {}
                        </tbody>
                    </table>
                </div>
            </div>
        ); 
  }
}

export default ResponseList;