import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import counter from "./reducer";
import { incrementCounter, decrementCounter, evenOddCounter, multiply, divide } from "./action";


const store = createStore(counter);
console.log(incrementCounter(1));

console.log(store.getState()); 
 var value = '';

 const handleChane = (event) => {
   value = event.target.value
 }

function App() {
  return (
    <div className="App">
      Count : {store.getState().count}
      <br />
      <input onChange = {(event) => handleChane(event)}></input>
      <button onClick={() => store.dispatch(incrementCounter(parseInt(value)))}>
        Increment by 1
      </button>
      <br />
      <button onClick={() => store.dispatch(decrementCounter(parseInt(value)))}>
        Decrement by 1
      </button>
      <button onClick={() => store.dispatch(evenOddCounter(parseInt(value)))}>
        evenODD
      </button>

      <button onClick={() => store.dispatch(multiply(parseInt(value)))}>
        multiply
      </button>
      <br></br>
      <button onClick={() => store.dispatch(divide(parseInt(value)))}>
        divide
      </button>

    </div>
  );
}

const rootElement = document.getElementById("root");
const render = () => ReactDOM.render(<App />, rootElement);
render();
store.subscribe(render);

