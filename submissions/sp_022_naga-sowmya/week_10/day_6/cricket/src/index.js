import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import AllReducer from './reducers/Allreducer';

const store = createStore(AllReducer);

// console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));