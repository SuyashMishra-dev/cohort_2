import React from 'react'
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import counter from './reducer.js';
import {incrementCounterX,decrementCounterX,incrementbyXodd,incrementbyXeven,incrementbyXmul,incrementbyXdiv} from "./actions.js";

const store  = createStore(counter);
console.log(store.getState());

class App extends React.Component{
    constructor(props) {
        super(props)
      
        this.state = {
           data:''
        }
      }
      handleChange=(event)=>{
        event.preventDefault();
         this.setState({data:event.target.value});
      }
    render(){
        return(
            <div>
                <div>Count:{store.getState().count}</div><br/>
                <input type="number" value={this.state.data} onChange={(e)=>this.handleChange(e)}></input><br/>
                <button onClick={()=>store.dispatch(incrementCounterX(Number(this.state.data)))}>Increment by x</button><br/><br/>
                <button onClick={()=>store.dispatch(decrementCounterX(Number(this.state.data)))}>Decrement by x</button><br/><br/>
                <button onClick={()=>store.dispatch(incrementbyXodd(Number(this.state.data)))}>Odd Increment </button><br/><br/>
                <button onClick={()=>store.dispatch(incrementbyXeven(Number(this.state.data)))}>Even Increment</button><br/><br/>
                <button onClick={()=>store.dispatch(incrementbyXmul(Number(this.state.data)))}>Multiply by x</button><br/><br/>
                <button onClick={()=>store.dispatch(incrementbyXdiv(Number(this.state.data)))}>Division by x</button><br/><br/>
            </div>
        );
    }  
}
const rootElement = document.getElementById("root");
const render = () => ReactDOM.render(<App />, rootElement);
render();
store.subscribe(render);