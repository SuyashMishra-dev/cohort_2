import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import App from './App'
import Action from './components/actions/action'

const reducer = combineReducers({
     reducer : Action
})

const store = createStore(reducer)

var rootelement = document.getElementById('root')
ReactDom.render(
    <Provider store = {store}>
        <App />
    </Provider>, rootelement
)