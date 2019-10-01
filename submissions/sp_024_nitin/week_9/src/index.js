import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import counter from './reducer';
import {countincrementer, countdecrementer, countoddincrementer, countevenincrementer} from './action';

const store = createStore(counter);
console.log(countincrementer(1));
console.log(store.getState());
//console.log("x");



function App() {
    return (
        <div className = "App">
            Count : {store.getState().count}
            <input type = "text" className = "crement"></input>
            <br></br>
            <button onClick = {() => store.dispatch(countincrementer(1))}>
                Increment by 1
            </button>
            <br></br>
            <button onClick = {() => store.dispatch(countdecrementer(1))}>
                Decrement by 1
            </button>
            <br></br>
            <button onClick = {() => store.dispatch(countoddincrementer(1))}>
                Increment by odd
            </button>
            <br></br>
            <button onClick = {() => store.dispatch(countevenincrementer(1))}>
                Increment by even
            </button>
        </div>
    );
}

const rootElement = document.getElementById("root");
const render = () => ReactDOM.render(<App />, rootElement);
render();
store.subscribe(render);