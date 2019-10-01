import React from 'react';
import ReactDom from 'react-dom';

import { createStore } from 'redux';

import count from './reducer';
import { incrementCountByX, decrementCountByX, conditionalInc, multiply, divide, remainder } from './actions';

const store = createStore(count);

console.log(store.getState());

let inputVal = '';
const handleInput = (e) => {
    inputVal = e.target.value
}

const App = () => {
    return (
        <div>
            <p>Count is {store.getState().count}</p>
            <input onChange={(e) => handleInput(e)}></input>
            <button onClick={() => store.dispatch(incrementCountByX(parseInt(inputVal)))}>Increment by Input</button>
            <button onClick={() => store.dispatch(decrementCountByX(parseInt(inputVal)))}>Decrement by Input</button>
            <button onClick={() => store.dispatch(conditionalInc(parseInt(inputVal)))}>Conditional Increment</button>
            <button onClick={() => store.dispatch(multiply(parseInt(inputVal)))}>Multiply by Input</button>
            <button onClick={() => store.dispatch(divide(parseInt(inputVal)))}>Divide by Input</button>
            <button onClick={() => store.dispatch(remainder(parseInt(inputVal)))}>Remainder by Input</button>
        </div>
    )
}
export default App;


const render = () => ReactDom.render(<App />, document.getElementById('root'));
store.subscribe(render);

render();