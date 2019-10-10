import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import counter from "./reducer";
import { incrementCounter,decrementCounter,evenoroddIncrement,multiplyerCounter,dividerCounter,remainderCounter } from "./action";


const store = createStore(counter);
function App() {
    return (
      <div>
        Count : {store.getState().count}
        <br />
        <input id="userInput" type="text" />
        <br />
        <button
          onClick={() =>
            store.dispatch(
              incrementCounter(Number(document.getElementById("userInput").value))
            )
          }
        >
          increment count by x
        </button>
        <br />
        <button
          onClick={() =>
            store.dispatch(
              decrementCounter(Number(document.getElementById("userInput").value))
            )
          }
        >
          decrement count by x
        </button>
        <br />
        <button
          onClick={() =>
            store.dispatch(
              evenoroddIncrement(Number(document.getElementById("userInput").value))
            )
          }
        >
          Increment by even or odd
        </button>
        <br />
        <button
          onClick={() =>
            store.dispatch(
                multiplyerCounter(Number(document.getElementById("userInput").value))
            )
          }
        >
          Multiply by x
        </button>
        <br />
        <button
          onClick={() =>
            store.dispatch(
                dividerCounter(Number(document.getElementById("userInput").value))
            )
          }
        >
          Divide by x
        </button>
        <br />
        <button
          onClick={() =>
            store.dispatch(
              remainderCounter(Number(document.getElementById("userInput").value))
            )
          }
        >
          Remainder by x
        </button>
      </div>
    );
  }
  
  const rootElement = document.getElementById("root");
  const render = () => ReactDOM.render(<App />, rootElement);
  render();
  store.subscribe(render);