import React from 'react';
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import counter from './reducer';
import { incrementCounter, decrementCounter, multiplyCounter, divideCounter, conditionalIncrement } from "./action"

const store = createStore(counter);

console.log(store.getState());

class App extends React.Component{
    constructor(){
        super();
        this.state={
            input: "",
            num: 0
        }
    }
    
    value = (e) => {
        this.setState({
            input:e.target.value 
        })
    }

    getValue = () => {
        this.setState({
            num: Number(this.state.input)
        })
    }

    render() {
        return(
            <React.Fragment>
                <div>
                    Count : {store.getState().count}
                    <br />
                    <button onClick={() => store.dispatch(incrementCounter(this.state.num))} >Add</button>
                    <br />
                    <button onClick={() => store.dispatch(conditionalIncrement(this.state.num))} >Add Condition</button>
                    <br />
                    <button onClick={() => store.dispatch(decrementCounter(this.state.num))} >Sub</button>
                    <br />
                    <button onClick={() => store.dispatch(multiplyCounter(this.state.num))} >Multiply</button>
                    <br />
                    <button onClick={() => store.dispatch(divideCounter(this.state.num))} >Divide</button>
                    <br />
                    <input type="text" value={this.state.text} onChange={(e) => {this.value(e)}} />
                    <button onClick={()=>{this.getValue()}}>click</button>
                </div>
            </React.Fragment>
        )
    }
}

const rootElement = document.getElementById("root");
const render = () => ReactDOM.render(<App />, rootElement);
render();
store.subscribe(render);