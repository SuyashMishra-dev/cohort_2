import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reduce from './redux/reducer.js'
import {BrowserRouter} from 'react-router-dom';
const store = createStore(Reduce)
console.log(store.getState())
ReactDOM.render(
    <Provider  store = {store}>
        <App />
      </Provider>
    ,document.getElementById('root'));