import React from 'react';
import ReactDom from 'react-dom';
// import { Route, BrowserRouter, Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

const rootElement = document.getElementById('root');
ReactDom.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
     rootElement);