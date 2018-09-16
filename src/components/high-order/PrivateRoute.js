/* eslint-disable no-shadow */
import React from 'react';

import { Route, Redirect } from 'react-router-dom';

import { session } from '../../services/session';

const PrivateRoute = ({ component, ...rest }) => (
    <Route {...rest} render={(props) => (
        session.isLoggedIn() ? (
            React.createElement(component, props)
        ) : (
            <Redirect to={{
                pathname: '/login',
            }} />
        )
    )} />
);

export default PrivateRoute;
