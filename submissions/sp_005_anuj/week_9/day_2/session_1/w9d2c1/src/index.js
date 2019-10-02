import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import counter from "./reducer.js";
import { incrementCounter, decrementCounter, incrementCounterEven, incrementCounterOdd } from "./action.js";
const store = createStore(counter);
class  App extends React.Component {
    constructor(){
        super();
        this.state = {
            value: '',
        }
    }
    handleInput = (e) => {
        this.setState({ value: e.target.value })

    }
    render() {
        let val = Number(this.state.value);
    return (
        <div>
            <input type="number" onChange={this.handleInput}></input>
        <div className="App">
            Count : {store.getState().count}
            <br />
            <button onClick={() => store.dispatch(incrementCounter(val))}>
                Increment
            </button>
            <br />
            <button onClick={() => store.dispatch(decrementCounter(val))}>
                Decrement
            </button> <br /> <br />
                <button onClick={() => store.dispatch(incrementCounterOdd(val))}>
                Increment by x+1
            </button> <br />
                <button onClick={() => store.dispatch(incrementCounterEven(val))}>
                Decrement by x+2
            </button>
        </div>
        </div>
    );
    }
}

const rootElement = document.getElementById("root");
const render = () => ReactDOM.render(<App />, rootElement);
render();
store.subscribe(render);

