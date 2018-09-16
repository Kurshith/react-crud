import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import DashboardContainer from '../containers/Dashboard';
import PrivateRoute from './high-order/PrivateRoute';
import SignIn from './auth/SignIn';
import LoginContainer from '../containers/Login';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as Auth from './auth';
import NoMatch from './NoMatch';
import CircularProgress from '@material-ui/core/CircularProgress';

import '../styles/App.scss';

class App extends Component {
  render(props) {
    return (
      <div className="App">
          <CssBaseline />
          <div>
            <CircularProgress size={50} />
          </div>
          <Switch>
          <PrivateRoute path='/dashboard' component={DashboardContainer} />
          <Route path='/login' component={LoginContainer} />
          <Route path='/signin' component={SignIn} />
          <Route path='/logout' component={Auth.Logout} />

          <Route exact path='/' render={() => (
            <Redirect
              to='/dashboard'
            />
          )} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
