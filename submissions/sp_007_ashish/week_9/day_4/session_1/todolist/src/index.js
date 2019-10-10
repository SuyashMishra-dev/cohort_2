import React from 'react';
import ReactDOM from 'react-dom';
import {
    createStore,
    combineReducers
}from "redux";
import Todo from './todo';
import { Provider } from "react-redux";
import App from "./App"
import counterReducer from "./todostore";
const rootReducer = combineReducers({
todoapp :counterReducer
});
const store = createStore(rootReducer);
const rootElement =document.getElementById('root');
ReactDOM.render(
<Provider store ={store}>
  <App />
</Provider>,
rootElement
);





