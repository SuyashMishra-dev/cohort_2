import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import counter from "./reducer";
import { incrementCounter, decrementCounter } from "./action";

const store = createStore(counter);

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            data: ''
        }
    }

    inputChange = (event) => {
        event.preventDefault();
        this.setState({data:event.target.value})
    }

    render(){
        return (
            <div>
              Count : {store.getState().count}
              <br />
              <input type="number" value={this.state.data} placeholder="enter the number" onChange={this.inputChange} />
              <br />
              <button onClick={() => store.dispatch(incrementCounter(Number(this.state.data)))}>Add Number + {this.state.data}</button>
              <br />
              <button onClick={() => store.dispatch(decrementCounter(Number(this.state.data)))}>Minus Number - {this.state.data}</button>
            </div>
          );
    }

}

const rootElement = document.getElementById("root");
const render = () => ReactDOM.render(<App />, rootElement);
render();
store.subscribe(render);
