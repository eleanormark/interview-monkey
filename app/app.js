import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Main from './Main';
import Login from './components/Login';

class App extends React.Component {
  render() {
    return(
     <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
         <Route path="login" component={Login} />
      </Switch>    
     </BrowserRouter>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));