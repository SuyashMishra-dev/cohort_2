import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {incrementCounter , decrementCounter , incrementOdd , incrementEven , multiplication , division , remainder} from "./action";
import Counter from "./reducer";

const store = createStore(Counter)

class App extends React.Component
{
    constructor()
    {
        super();
        this.state ={
            value: 0
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
        return(
            <div>
                <input onChange ={(e) =>{this.handleInput(e)}} type="text" />
                <br />
                count: {store.getState().count}
                <br />
                <button onClick = {() => store.dispatch(incrementCounter(this.state.value))}>Increment Count by: {this.state.value}</button>
                <br />
                <button onClick = {() => store.dispatch(decrementCounter(this.state.value))}>Decrement Count by: {this.state.value}</button>
                <br />
                <button onClick = {() => store.dispatch(incrementOdd(this.state.value))}>Increment if Odd</button>
                <br />
                <button onClick = {() => store.dispatch(incrementEven(this.state.value))}>Increment if Even</button>
                <br />
                <button onClick = {() => store.dispatch(multiplication(this.state.value))}>Multiply Count with {this.state.value}</button>
                <br />
                <button onClick = {() => store.dispatch(division(this.state.value))}>Divide count with {this.state.value}</button>
                <br />
                <button onClick = {() => store.dispatch(remainder(this.state.value))}>Remainder</button>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
const render = () => ReactDOM.render(<App /> , rootElement);
render();
store.subscribe(render);