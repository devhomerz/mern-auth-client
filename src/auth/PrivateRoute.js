import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from './helpers';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location }
          }}
        />
      )
    }
  ></Route>
);

export default PrivateRoute;
