import React from "react";
import ReactDOM from "react-dom";
import {
  createStore, // (1)
  combineReducers // (2)
} from "redux";
import { Provider } from "react-redux"; // (3)

import App from "./Components/App";
// reducer defined inside counterStore
import counterReducer from "./Store";

const rootReducer = combineReducers({ //Reducer function
  counter: counterReducer
});

const store = createStore(rootReducer); //store create
console.log(store)
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
