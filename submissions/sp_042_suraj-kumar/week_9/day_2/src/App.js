import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import counter from "./reducer";
import { incrementCounter, decrementCounter,evenOddCounter,multiply,divide} from "./action";



const store = createStore(counter);

console.log(store.getState()); 
let val='';

const handleInput = (e) => {
  val=e.target.value
}

function App() {
  return (
    <div className="App">
      Count : {store.getState().count}

      <br />
      <input onChange={(e) =>handleInput(e)}></input>
      <br></br>
      <button onClick={() => store.dispatch(incrementCounter(parseInt(val)))}>
        Increment
      </button>
      <br></br>
      <br />
      <button onClick={() => store.dispatch(decrementCounter(parseInt(val)))}>
        Decrement
      </button><br></br>
      <br></br>
      
      <button onClick={() => store.dispatch(evenOddCounter(parseInt(val)))}>
        oddEvenincrement
      </button><br></br>
      <br></br>
      <button onClick={() => store.dispatch(multiply(parseInt(val)))}>
        Multiply
      </button><br></br>
      <br></br>
      <button onClick={() => store.dispatch(divide(parseInt(val)))}>
      Divide
      </button><br></br>
      <br></br>

    
    </div>
  );
}

const rootElement = document.getElementById("root");
const render = () => ReactDOM.render(<App />, rootElement);
render();
store.subscribe(render);
export default App;