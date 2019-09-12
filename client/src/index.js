// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
//import { Provider } from 'react-redux';

// routes
import { Routes } from './routes.jsx';
//import { store } from './redux/store';

// | -------------- store redux --------------------|
// Grab the state from a global variable injected into the server-generated HTML
//const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
//delete window.__PRELOADED_STATE__

ReactDOM.hydrate(
    //<Provider store={store}>
    <BrowserRouter>
        {
            Routes
        }
    </BrowserRouter>
    /*</Provider>*/,
    document.getElementById('root')
);