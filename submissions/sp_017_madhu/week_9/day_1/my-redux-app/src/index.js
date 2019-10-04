import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import counter from "./Reducer";
import { incrementCounter, decrementCounter, multiplyCounter,divideCounter ,remainderCounter} from "./Action";

// We createa a store. We pass counter as an argument

const store = createStore(counter);
console.log(incrementCounter(1));
console.log(store.getState()); 

let inputValue='';
const handleChange = (event) =>{
  inputValue= event.target.value;
}


function App() {
  
  return (
    <div className="App">
      Count : {store.getState().count}
      <br />
      Enter Number Here:
      <input type='text' name='name' onChange={(e)=>handleChange(e)} placeholder='username' />
       <br />      
      <button onClick={() => store.dispatch(incrementCounter(Number(inputValue)))}>
        Increment by 1
      </button>
     
      <button onClick={() => store.dispatch(decrementCounter(Number(inputValue)))}>
        Decrement by 1
      </button>
      <button onClick={() => store.dispatch(incrementCounter(Number(inputValue)))}>
      Increment count by x+1
      </button>
      <button onClick={() => store.dispatch(incrementCounter(Number(inputValue)))}>
      Increment count by x+2 
        </button>
        <button onClick={() => store.dispatch(multiplyCounter(Number(inputValue)))}>
        multiply the count by x 
        </button>
        <button onClick={() => store.dispatch(divideCounter(Number(inputValue)))}>
        divide the count by x 
        </button>
        <button onClick={() => store.dispatch(remainderCounter(Number(inputValue)))}>
        remainder
        </button>   
    </div>
  );
}

const rootElement = document.getElementById("root");
const render = () => ReactDOM.render(<App />, rootElement);
render();
store.subscribe(render);
