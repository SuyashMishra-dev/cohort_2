import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import addition from './redux/reducer';
import './App.css';
import {additionSum, subtractMinus, multiplyMul, divideDiv} from './redux/action.js';
const store = createStore(addition);
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }
    }
    handleInput = (e) => {
        this.setState({value:e.target.value})
    }
    render(){
        let val = Number(this.state.value);
        return(
            <div>
                <h1>Calculator</h1>
                <div className = "container">
                    <input  type = "number" onChange = {this.handleInput}></input>
                    <div>
                        <p>
                        result : {store.getState().result}
                        </p>
                        <br/>
                        <center>
                        <button onClick = {() => store.dispatch(additionSum(val))}>
                            Add
                        </button>
                        <button onClick = {() => store.dispatch(subtractMinus(val))}>
                        Subtract
                        </button>
                        <button onClick = {() => store.dispatch(multiplyMul(val))}>
                            Multiply
                        </button>
                        <button onClick = {() => store.dispatch(divideDiv(val))}>
                            Divide
                        </button>
                        </center>
                    </div>
                </div>
            </div>
        );
    }
}
const rootElement =document.getElementById("root");
const render = () => ReactDOM.render(<App />,rootElement);
render();
store.subscribe(render);

