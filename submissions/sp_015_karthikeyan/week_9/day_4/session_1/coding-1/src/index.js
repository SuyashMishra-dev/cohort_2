import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

import todoReducer from './redux/todoStore';

const todoStore = createStore(todoReducer);

ReactDOM.render(
    <Provider store={todoStore}>
        <App />
    </Provider>
    , document.getElementById('root'));

