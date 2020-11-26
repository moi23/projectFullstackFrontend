import React from 'react';

import { isAuthenticated } from './auth';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/login/index';
import Dashboard from './pages/dashboard/index';
import Register from './pages/register/index';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path="/dashboard" component={() => <Dashboard />} />
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
