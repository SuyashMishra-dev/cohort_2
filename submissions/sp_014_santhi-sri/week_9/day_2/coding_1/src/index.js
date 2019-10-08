import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { incrementcounter, decrementcounter,incrementEvenOdd, multiplyByX,dividedByX,remainderX } from './components/action'
import Counter from './components/reducer'

const store = createStore(Counter)

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }
    handleInput = (e) => {
        e.preventDefault()
        this.setState({ value: e.target.value })
    }
    render() {
        return (
            <div>
                count :{store.getState().count}
                <input value={this.state.value} onChange={this.handleInput} type="text" placeholder="Enter x..."></input>
                <button onClick={() => store.dispatch(incrementcounter(Number(this.state.value)))}>increment by x</button>
                <button onClick={() => store.dispatch(decrementcounter(Number(this.state.value)))}>decrement by x</button>
                <button onClick={() => store.dispatch(incrementEvenOdd(Number(this.state.value)))}>increment by x+1/x+2</button>
                <button onClick={() => store.dispatch(multiplyByX(Number(this.state.value)))}>multiply by X</button>
                <button onClick={() => store.dispatch(dividedByX(Number(this.state.value)))}>divided by X</button>
                <button onClick={() => store.dispatch(remainderX(Number(this.state.value)))}>remainder X</button>


            </div>

        )
    }
}

const render = () => ReactDOM.render(<App />, document.getElementById('root'))
render();
store.subscribe(render)