// dependencies
import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

// views
import App from './views/app.jsx';


export const Routes = (
    <Switch>
        <Route exact path="/404" render={() => <h1>NOT FOUND</h1>} />
        <Route path="/" component={App} />
    </Switch>
);
