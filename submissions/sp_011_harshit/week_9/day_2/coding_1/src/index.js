import { createStore } from 'redux'
import React from 'react'
import ReactDom from 'react-dom'
import counter from './reducer'
import {incrementCounter, decrementCounter ,increment_1 ,divide,remainder,multiply} from "./action"
let val1;

const store = createStore(counter);

const handleChaNge=(val)=>{
        val1=val.target.value

}
function App() {
 
    return (
        <div>
            count :{store.getState().count}
            <br />
            <input onChange={(e)=>handleChaNge(e)} ></input>
            <button onClick={()=>store.dispatch(incrementCounter(Number(val1)))}>Increment</button>
            <button onClick={()=>store.dispatch(decrementCounter(val1))}>Decrement</button>
            <button onClick={()=>store.dispatch(increment_1(val1))}>Condition</button>
            <button onClick={()=>store.dispatch(multiply())}>multiply</button>
            <button onClick={()=>store.dispatch(divide())}>divide</button>
            <button onClick={()=>store.dispatch(remainder())}>Remainder</button>
        
        </div>
    )
}

const rootELement = document.getElementById("root");

const render = () => ReactDom.render(<App />, rootELement)
render();
store.subscribe(render)