import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import counter from "./reducer";
import { incrementCounter,decrementCounter ,addVal,takeval,oddInc,multiplyCounter,divVal,remVal} from "./action";
import { strict } from "assert";

const store =createStore(counter);
console.log(addVal(0));
console.log(store.getState());
console.log("now value is"+store.getState().unit);
function  App (){
    let input='';
    let unit=Number(store.getState().val);
    console.log(unit);
    return(
    <div className="App">
       <form onSubmit={e=>{
           e.preventDefault();
           store.dispatch(addVal(store.getState().unit))
           input = ''
           }}> <input onChange={(e)=>store.dispatch(takeval(e.target.value))} />
               <button type="submit">submit</button>
           </form>
           Count :{store.getState().count}
           value:{store.getState().val}
           <br />
            <button onClick ={()=>store.dispatch(incrementCounter(unit))}>increment by val</button> 
            <button onClick ={()=>store.dispatch(decrementCounter(unit))}>Dec by val</button> 
            <button onClick ={()=>store.dispatch(oddInc(unit))}>odd/even increment by val</button> 
            <button onClick ={()=>store.dispatch(multiplyCounter(unit))}>mul by val</button> 
            <button onClick ={()=>store.dispatch(divVal(unit))}>sub by val</button> 
            <button onClick ={()=>store.dispatch(remVal(unit))}>rem by val</button> 
           <br />
           {/* <button onClick={}>Decrement by val</button> */}
       
    </div>
    )
}

const rootElement = document.getElementById("root");
const render = () => ReactDOM.render(<App />, rootElement);
render();
store.subscribe(render);