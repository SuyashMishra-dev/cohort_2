import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import counter from "./reducer.js";
import { incrementCounter, decrementCounter } from "./action.js";
const store = createStore(counter);
class App1 extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
        }
    }
    render() {
        let val = Number(this.state.value);
        return (
            <div className="App">
                <div className="App mt-5">
                    Count : {store.getState().count}
                    <br />
                    <button onClick={() => store.dispatch(incrementCounter(1))}>
                       Add To Cart
                </button>
                    <br />
                    <button onClick={() => store.dispatch(decrementCounter(1))}>
                       Remove Form Cart
                </button> <br /> <br />
                </div>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
const render = () => ReactDOM.render(<App1 />, rootElement);
render();
store.subscribe(render);
export default App1;
