import React from "react";
import ReactDOM from "react-dom";
import counter from "./reducer";
import {createStore} from "redux";
import {incrementCounter , decrementCounter, incrementOdd , incrementEven , multCounter , divCounter} from "./action";

const store = createStore(counter);
class App extends React.Component
{
    constructor()
    {
        super();
        this.state={
            value: ""
        }
    }
    handleInput = (e) =>
    {
        this.setState({
            value: Number(e.target.value)
        });
    }
    render()
    {
        console.log(store.getState().count)
        return(
            <div>
                <input onChange={(e) => {this.handleInput(e)}}  type="text" />
                count: {store.getState().count}
                <br />
                <button onClick = {()=> store.dispatch(incrementCounter(this.state.value))}>Increment</button>
                <br />
                <button onClick = {() => store.dispatch(decrementCounter(this.state.value))}>Decrement</button>
                <br />
                <button onClick = {() => store.dispatch(incrementOdd(this.state.value))}>Increment Odd</button>
                <br />
                <button onClick = {() => store.dispatch(incrementEven(this.state.value))}>Increment Even</button>
                <br />
                <button onClick = {() => store.dispatch(multCounter(this.state.value))}>Multiply with input</button>
                <br />
                <button onClick = {() => store.dispatch(divCounter(this.state.value))}>Divide the count by input</button>
            </div>
        );
    }
}
const rootElement = document.getElementById("root");
const render = () => ReactDOM.render(<App />, rootElement);
render();
store.subscribe(render)
