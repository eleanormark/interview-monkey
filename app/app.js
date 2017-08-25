import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Main from "./Main";
import Login from "./components/Login";
import Signup from "./components/Signup";
import InterviewQA from "./components/InterviewQA";
import ResponseList from "./ResponseList";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/responselist" component={ResponseList} />
          <Route path="/qa/:uuid" component={InterviewQA} />
        </Switch>
      </HashRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
