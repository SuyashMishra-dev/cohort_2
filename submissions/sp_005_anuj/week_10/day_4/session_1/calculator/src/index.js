 
import { createStore } from 'redux';
import reduce from './redux/reducer';
import {equal, subtract, multiply,divide, odd, even} from "./redux/action.js";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import {Provider} from "react-redux";

const store = createStore(reduce); 

ReactDOM.render(
	<Provider store = {store} >
		<App />
	</Provider>,
	document.getElementById('root')
	);
