// dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// routes
import { Routes } from './routes.jsx';

ReactDOM.hydrate(
    <BrowserRouter>
        {
            Routes
        }
    </BrowserRouter>,
    document.getElementById('root')
);