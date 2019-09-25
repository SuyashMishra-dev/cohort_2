// import React from 'react';
// import ReactDom from 'react-dom';
// import App from './App';

// const rootElement = document.getElementById('root');
// ReactDom.render(<App />, rootElement);

import React from 'react';
import ReactDom from 'react-dom';
// import { Route, BrowserRouter, Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App';

const rootElement = document.getElementById('root');
ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
     rootElement);