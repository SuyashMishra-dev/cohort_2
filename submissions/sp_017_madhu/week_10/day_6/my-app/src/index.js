import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PlayListRedux from './PlayListRedux';

import {createStore} from 'redux';
import reducer from './reducers/reducerOne';
import { Provider } from "react-redux"; 

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
   
  </Provider>,
  rootElement
);
