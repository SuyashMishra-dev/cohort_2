import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import App from "./components/App.js"
import App1 from "./components/App1.js"
import App2 from "./components/App2.js"
import App3 from "./components/App3.js"



ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App1 />, document.getElementById('root1'));
ReactDOM.render(<App2 />, document.getElementById('root2'));
ReactDOM.render(<App3 />, document.getElementById('root3'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
