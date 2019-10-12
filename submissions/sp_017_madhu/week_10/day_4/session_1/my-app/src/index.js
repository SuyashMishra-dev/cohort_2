import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Reducer from "./Reducer";
import { incrementCounter, decrementCounter, multiplyCounter,divideCounter ,remainderCounter,finalCounter} from "./Action";
import "./index.css"

const store = createStore(Reducer);


let inputValue='';
const handleChange = (event) =>{
  inputValue= event.target.value;
}


function App() {
  
  return (
    <div className="display">
        <h1>Calculator</h1>
        <div>
      Result : {store.getState().count}
      <br/>
      </div>
      <br />
     
      <input type='Number' name='name' onChange={(e)=>handleChange(e)} placeholder='Number' />
       <br />      
      <button onClick={() => store.dispatch(incrementCounter(Number(inputValue)))}>
        +
      </button>
     
      <button onClick={() => store.dispatch(decrementCounter(Number(inputValue)))}>
        -
      </button>
      <br/>
      <button onClick={() => store.dispatch(multiplyCounter(Number(inputValue)))}>
        *        
    </button>
      
    <button onClick={() => store.dispatch(divideCounter(Number(inputValue)))}>
    ÷ 
    </button>
    <br/>
    <button onClick={() => store.dispatch(remainderCounter(Number(inputValue)))}>
        %
    </button>
    <button onClick={() => store.dispatch(finalCounter(Number(inputValue)))}>
        =
    </button>  
      
      
    
     
    </div>
  );
}

const rootElement = document.getElementById("root");
const render = () => ReactDOM.render(<App />, rootElement);
render();
store.subscribe(render);
