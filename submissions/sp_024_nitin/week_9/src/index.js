import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import counter from './reducer';
import {countincrementer, countdecrementer, countoddevenincrementer, countmulincrementer, countdivincrementer, countremainder} from './action';

const store = createStore(counter);
console.log(countincrementer(1));
console.log(store.getState());
//console.log("x");



function App() {
    return (
        <div>
            Count : {store.getState().count}
            <input type = "text" id = "crement"></input>
            <br>
            </br>
            <button onClick = {() => store.dispatch(countincrementer(Number(document.getElementById("crement").value)))}>
                Increment by 1
            </button>
            <br>
            </br>
            <button onClick = {() => store.dispatch(countdecrementer(Number(document.getElementById("crement").value)))}>
                Decrement by 1
            </button>
            <br>
            </br>
            <button onClick = {() => store.dispatch(countoddevenincrementer(Number(document.getElementById("crement").value)))}>
                Increment by odd
            </button>
            <br>
            </br>
            <button onClick = {() => store.dispatch(countoddevenincrementer(Number(document.getElementById("crement").value)))}>
                Increment by even
            </button>
            <br>
            </br>
            <button onClick = {() => store.dispatch(countmulincrementer(Number(document.getElementById("crement").value)))}>
                Increment by mul
            </button>
            <br>
            </br>
            <button onClick = {() => store.dispatch(countdivincrementer(Number(document.getElementById("crement").value)))}>
                Increment by div
            </button>
            <br>
            </br>
            <button onClick = {() => store.dispatch(countremainder(Number(document.getElementById("crement").value)))}>
                Remainder
            </button>
        </div>
    );
}

const rootElement = document.getElementById("root");
const render = () => ReactDOM.render(<App />, rootElement);
render();
store.subscribe(render);