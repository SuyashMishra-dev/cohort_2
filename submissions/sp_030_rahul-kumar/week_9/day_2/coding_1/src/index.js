import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import counter from "./reducer";
import {INC_COUNTERX, DEC_COUNTERX, INC_COUNTERXEVEN, INC_COUNTERXODD, INC_COUNTERXMUL, INC_COUNTERXDIV } from "./action";


const store  = createStore(counter);
// console.log(store.getState());

class App extends React.Component{
  constructor(props) {
      super(props)
      this.state = {
         data:''
      }
    }
    handleChange=(e)=>{
      e.preventDefault();
       this.setState({data:e.target.value});
    }
  render(){
      return(
          <div>
              <div>Count:{store.getState().count}</div><br/>
              <input type="number" value={this.state.data} onChange={(e)=>this.handleChange(e)}></input><br/><br/>
              <button onClick={()=>store.dispatch(INC_COUNTERX(Number(this.state.data)))}>Increment By X</button><br/><br/>
              <button onClick={()=>store.dispatch(DEC_COUNTERX(Number(this.state.data)))}>Decrement By X</button><br/><br/>
              <button onClick={()=>store.dispatch(INC_COUNTERXODD(Number(this.state.data)))}>Odd Increment </button><br/><br/>
              <button onClick={()=>store.dispatch(INC_COUNTERXEVEN(Number(this.state.data)))}>Even Increment</button><br/><br/>
              <button onClick={()=>store.dispatch(INC_COUNTERXMUL(Number(this.state.data)))}>Multiply By X</button><br/><br/>
              <button onClick={()=>store.dispatch(INC_COUNTERXDIV(Number(this.state.data)))}>Division By X</button><br/><br/>
          </div>
      );
  }  
}
const rootElement = document.getElementById("root");
const render = () => ReactDOM.render(<App />, rootElement);
render();
store.subscribe(render);
