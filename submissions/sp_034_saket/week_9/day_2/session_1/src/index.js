import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import counter from "./Reducers";
import { incrementCounter, decrementCounter, incrementOdd, incrementEven, multiply, divide} from "./Action";

const store = createStore(counter);

class Calculation extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data: '',
      }
  }
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      data: event.target.value
    });
  }

  render(){
    return (
      <div>
        <div>
          Count : {store.getState().count}
        </div><br/>
        <input type="number" value={this.state.increment} onChange={(event)=>this.handleChange(event)}></input><br/>
        <button onClick={() => store.dispatch(incrementCounter(Number(this.state.data)))}>
          Increment by x
        </button>
        <br/>
        <button onClick={() => store.dispatch(decrementCounter(Number(this.state.data)))}>
          Decrement by x
        </button>
        <br/><br/>
        <button onClick={() => store.dispatch(incrementOdd(Number(this.state.data)))}>
          odd;x+1
        </button>
        <br/>
        <button onClick={() => store.dispatch(incrementEven(Number(this.state.data)))}>
          even;x+2
        </button>
        <br/><br/>
        <button onClick={() => store.dispatch(multiply(Number(this.state.data)))}>
          Multiply by count
        </button>
        <br/>
        <button onClick={() => store.dispatch(divide(Number(this.state.data)))}>
          divide by count
        </button>
      </div>
    ); 
  }
}
const render = () => ReactDOM.render(<Calculation/>,document.getElementById("root"));
render();
store.subscribe(render);
