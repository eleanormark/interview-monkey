import React from 'react';
import NavbarInstance from './components/NavbarInstance.js';
import ResponseLists from './components/ResponseLists.js';

class ResponseListView extends React.Component {
  render() {
    return(
            <div>
                <NavbarInstance />
                <div className="container">
                    <ResponseLists />

                </div>
            </div>
        ); 
  }
}

export default ResponseListView;