import React from 'react';
import NavbarInstance from './components/NavbarInstance.js';
import ResponseListItem from './components/ResponseListItem';
import helpers from "./components/utils/helpers";

class ResponseList extends React.Component {
    constructor() {
            super();
    
        this.state = { 
            title: "",
            qaResponseData: null
        };
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
    render() {
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
                                            <ResponseListItem res1={res1} res2={res2} key={j+"res2"}/>
                                         )
                                    
                                    
                                    })
                                  )
                                  }.bind(this))
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
        ); 
  }
}

export default ResponseList;