import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Main from './Main';
import Login from './components/Login';
import Signup from './components/Signup';
import InterviewQA from './components/InterviewQA';
import ResponseLists from './components/ResponseLists';

class App extends React.Component {
  render() {
    return(
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Main} />
         <Route exact path="/login" component={Login} />
         <Route exact path="/signup" component={Signup} />
         <Route exact path="/interviewqa" component={InterviewQA} />
         <Route exact path="/responselists" component={ResponseLists} />
      </Switch>
     </HashRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));