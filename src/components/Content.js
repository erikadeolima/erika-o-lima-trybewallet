import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';

class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    );
  }
}

export default Content;
