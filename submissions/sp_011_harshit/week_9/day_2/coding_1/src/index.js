import { createStore } from 'redux'
import React from 'react'
import ReactDom from 'react-dom'
import counter from './reducer'
import {incrementCounter, decrementCounter ,increment_1 ,multiply,divide,remainder} from "./action"
let val1;

const store = createStore(counter);

const handleChange=(val)=>{
        val1=val.target.value

}
function App() {
 
    return (
        <div>
            count :{store.getState().count}
            <br />
            <input onChange={(e)=>handleChange(e)} ></input>
            <button onClick={()=>store.dispatch(incrementCounter(Number(val1)))}>Increment</button>
            <button onClick={()=>store.dispatch(decrementCounter(Number(val1)))}>Decrement</button>
            <button onClick={()=>store.dispatch(increment_1(Number(val1)))}>Condition</button>
            <button onClick={()=>store.dispatch(multiply(Number(val1)))}>multiply</button>
            <button onClick={()=>store.dispatch(divide(Number(val1)))}>divide</button>
            <button onClick={()=>store.dispatch(remainder(Number(val1)))}>Remainder</button>
        
        </div>
    )
}

const rootELement = document.getElementById("root");

const render = () => ReactDom.render(<App />, rootELement)
render();
store.subscribe(render)