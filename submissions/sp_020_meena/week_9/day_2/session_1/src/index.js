import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import counter from "./reducer";
import{incrementCounter, decrementCounter,incrementEven,incrementOdd} from "./action"
// import './styles.css';
// import * as serviceWorker from './serviceWorker';

const store= createStore(counter);
console.log(store.getState());

function App (){
    return(
        <div>
             Count:{store.getState().count}
            <br/><br/>
            <label>Enter Number x:</label>
            <input type = "number" name = "name">
            </input>
            <br/><br/>
            <button onClick = {() => store.dispatch(incrementCounter(1))}>
                Increment by x
            </button>
            <br/><br/>
            <button onClick = {() => store.dispatch(decrementCounter(1))}>
                Decrement by x
            </button>
            <br/><br/>
            <button onClick = {() => store.dispatch(incrementEven(1))}>
                IncrementOdd by x+1
            </button>
            <br/><br/>
            <button onClick = {() => store.dispatch(incrementOdd(1))}>
                IncrementEven by x+2
            </button>
            <br/><br/>
            <button onClick = {() => store.dispatch(incrementEven(1))}>
                Multiply by x
            </button>
            <br/><br/>
            <button onClick = {() => store.dispatch(incrementEven(1))}>
                Divide by x
            </button>
            <br/><br/>
           
        </div>
    )
}
const rootElement = document.getElementById('root');
const render = () => ReactDOM.render(<App/>,rootElement);
render();
store.subscribe(render);
// export default App;

// ReactDOM.render(<App />, document.getElementById('root'));
// 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
