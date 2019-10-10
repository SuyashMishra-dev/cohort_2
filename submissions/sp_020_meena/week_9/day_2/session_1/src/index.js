import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import counter from "./reducer";
import { incrementCounter,decrementCounter,conditionalIncrement,multiplyByX, divideByX} from "./action"
// import './styles.css';
// import * as serviceWorker from './serviceWorker';

const store= createStore(counter);
console.log(store.getState());

var inputValue = "";

 const handleInput = (event) => {
    inputValue = event.target.value;
    // inputValue.map(a => Number(a));

}

function App (){
    return(
        <div>
             Count:{store.getState().count}
            <br/><br/>
            <label>Enter Number x:</label>
            <input onChange = {(event) => handleInput(event)}>
            </input>
            <br/><br/>
            <button onClick = {() => store.dispatch(incrementCounter(parseInt(inputValue)))}>
                Increment by x
            </button>
            <br/><br/>
            <button onClick = {() => store.dispatch(decrementCounter(parseInt(inputValue)))}>
                Decrement by x
            </button>
            <br/><br/>
            <button onClick = {() => store.dispatch(conditionalIncrement(parseInt(inputValue)))}>
                Condition Increment 
            </button>
            <br/><br/>
            {/* <button onClick = {() => store.dispatch(incrementOdd(parseInt(inputValue)))}>
                IncrementEven by x+1
            </button> */}
            {/* <br/><br/> */}
            <button onClick = {() => store.dispatch(multiplyByX(5))}>
                Multiply by x
            </button>
            <br/><br/>
            <button onClick = {() => store.dispatch(divideByX(parseInt(inputValue)))}>
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
