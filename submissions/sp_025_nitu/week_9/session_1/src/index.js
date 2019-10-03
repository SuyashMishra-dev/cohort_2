import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import counter from "./reducer";
import { incrementCounter, decrementCounter,incrementODD,incrementEVEN, incrementMUL, incrementDIV } from "./action";



const store = createStore(counter);
// console.log(incrementCounter(1));

// console.log(store.getState()); 

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            data:''
        }
    }
    handleChange =(e) =>{
        e.preventDefault()
        this.setState({data:e.target.value})
        
    }
    render(){
  return (
    <div className="App">
        <input  value={this.state.data} onChange={(e)=>this.handleChange(e)}/><br />
      Count : {store.getState().count} rem:{store.getState().rem}
      <br />
      <button onClick={() => store.dispatch(incrementCounter(Number(this.state.data)))}>
        Increment by 1
      </button>
      <br />
      <button onClick={() => store.dispatch(decrementCounter(Number(this.state.data)))}>
        Decrement by 1
      </button>
      <button onClick={() => store.dispatch(incrementODD(Number(this.state.data)))}>
      Increment ODD by 1
      </button>
      <button onClick={() => store.dispatch(incrementEVEN(Number(this.state.data)))}>
      Increment Even by 2
      </button>
      <button onClick={() => store.dispatch(incrementMUL(Number(this.state.data)))}>
      multiply by count
      </button>
      <button onClick={() => store.dispatch(incrementDIV(Number(this.state.data)))}>
      Div by count
      </button>
    </div>
  );
    }
}

const rootElement = document.getElementById("root");
const render = () => ReactDOM.render(<App />, rootElement);
render();
store.subscribe(render);
