import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import counter from './reducer';
import { incrementCounter, decrementCounter, multiplyCounter, divideCounter, oddCounter, evenCounter } from './action';

const store = createStore(counter);

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            input:""
        }
    }

    handleInput(key,value) {
        this.setState({
            [key]: value
        })
    }

    render(){
        return(
            <div>
                <input 
                    type="number" 
                    placeholder="Enter a Number"
                    onChange = {(e) => this.handleInput("input", e.target.value)} 
                />
                <br/>
                <br/>
                Count: {store.getState().count}
                <br/>
                <button onClick={() => store.dispatch(incrementCounter(Number(this.state.input)))}>
                    Increment count by {this.state.input}
                </button>
                <br/>
                <button onClick={() => store.dispatch(decrementCounter(Number(this.state.input)))}>
                    Decrement count by {this.state.input}
                </button>
                <br/>
                <button onClick={() => store.dispatch(oddCounter(Number(this.state.input)))}>
                    Odd count by 1
                </button>
                <br/>
                <button onClick={() => store.dispatch(evenCounter(Number(this.state.input)))}>
                    Even count by 2
                </button>
                <br/>
                <button onClick={() => store.dispatch(multiplyCounter(Number(this.state.input)))}>
                    Multiply count by {this.state.input}
                </button>
                <br/>
                <button onClick={() => store.dispatch(divideCounter(Number(this.state.input)))}>
                    Divide count by {this.state.input}
                </button>
            </div>
        )
    }
}

const rootElemet = document.getElementById('root');
const render = () => ReactDOM.render(<App />, rootElemet);
render();
store.subscribe(render);