// dependencies
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

// views
import App from './views/App.jsx';


export const Routes = (
    <Switch>
        <Route path="/404" render={() => <h1>NOT FOUND</h1>} />
        <Route exact path="/" component={App} />
        <Redirect to="/404" />
    </Switch>
);
