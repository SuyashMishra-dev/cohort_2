import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import counter from "./reducer";
import { incrementCounter, decrementCounter, multiplyCounter, divideCounter, modulusCounter } from "./action";

// We created a store. We pass counter as an argument
//
const store = createStore(counter);
console.log(incrementCounter(1));
// store.dispatch(incrementCounter(1))
console.log(store.getState()); // Log the initial state
// Store functions
// getState
// subscribe
// dispatch

function App() {
  return (
    <div className="App">
      Count : {store.getState().count}
      <br />
      <input type="number" id="input"></input>
      <br />
      
      <button onClick={() => store.dispatch(incrementCounter(Number(document.getElementById('input').value)))}>
        Increment by x
      </button>
      <br />
      <button onClick={() => store.dispatch(decrementCounter(Number(document.getElementById('input').value)))}>
        Decrement by x
      </button>
      <br />
      <button onClick={() => store.dispatch(multiplyCounter(Number(document.getElementById('input').value)))}>
        Multiply count by x
      </button>
      <br />
      <button onClick={() => store.dispatch(divideCounter(Number(document.getElementById('input').value)))}>
        Divide count by x
      </button>
      <br />
      <button onClick={() => store.dispatch(modulusCounter(Number(document.getElementById('input').value)))}>
        Modulus of count against x
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
const render = () => ReactDOM.render(<App />, rootElement);
render();
store.subscribe(render);
// store.subscribe listens to changes in the store.
// When changesare made it will rerender
