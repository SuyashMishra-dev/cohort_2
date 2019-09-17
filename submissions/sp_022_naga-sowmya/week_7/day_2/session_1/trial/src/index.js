import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Profile from './components/App1.js'
// import Profile1 from './components/App2.js'
import Button from './components/App2.js'
import Figure from './components/App3.js'


// ReactDOM.render(<App1/>, document.getElementById('root'));
ReactDOM.render(<Profile />, document.querySelector('#root'))
// ReactDOM.render(<Profile1/>, document.querySelector('#root1'));
ReactDOM.render(<Button/>, document.querySelector('#root2'));
ReactDOM.render(<Figure/>, document.querySelector('#root3'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
