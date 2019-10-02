import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import counter from "./reducer";
import { incrementCounter, decrementCounter, evenoroddIncrement, multiplyer, divider, remainderCounter } from "./action";

const store = createStore(counter);

function App() {
  return (
    <div className="App">
      Count : {store.getState().count}
      <br />
      <input id="input" placeholder="enter value of x" type="text" />
      <br />
      <button
        onClick={() =>
          store.dispatch(
            incrementCounter(Number(document.getElementById("input").value))
          )
        }
      >
        Increment by x
      </button>
      <br />
      <button
        onClick={() =>
          store.dispatch(
            decrementCounter(Number(document.getElementById("input").value))
          )
        }
      >
        Decrement by x
      </button>
      <br />
      <button
        onClick={() =>
          store.dispatch(
            evenoroddIncrement(Number(document.getElementById("input").value))
          )
        }
      >
        Even/Odd Incrementer
      </button>
      <br />
      <button
        onClick={() =>
          store.dispatch(
            multiplyer(Number(document.getElementById("input").value))
          )
        }
      >
        Multiply by x
      </button>
      <br />
      <button
        onClick={() =>
          store.dispatch(
            divider(Number(document.getElementById("input").value))
          )
        }
      >
        Divide by x
      </button>
      <br />
      <button
        onClick={() =>
          store.dispatch(
            remainderCounter(Number(document.getElementById("input").value))
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
