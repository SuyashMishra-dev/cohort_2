import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {IncrementCounter, DecrementCounter, MultiplyCounter, DivideCounter, ReminderCounter, OddEvenCounter} from './action'
import counter from './reducer'

const store = createStore(counter);

function App() {
    return (
        <div className="container">
            <h1 className="mb-3 mt-3">Count : {store.getState().count}</h1>
            <input id="input" className="mb-3"></input><br />
            <button className="btn btn-dark mb-3" onClick={()=> {store.dispatch(IncrementCounter(Number(document.getElementById('input').value)))}}>Increment</button><br />
            <button className="btn btn-dark mb-3" onClick={()=> {store.dispatch(DecrementCounter(Number(document.getElementById('input').value)))}}>Decrement</button><br />
            <button className="btn btn-dark mb-3" onClick={()=> {store.dispatch(MultiplyCounter(Number(document.getElementById('input').value)))}}>Multiply</button><br />
            <button className="btn btn-dark mb-3" onClick={()=> {store.dispatch(DivideCounter(Number(document.getElementById('input').value)))}}>Divide</button><br />
            <button className="btn btn-dark mb-3" onClick={()=> {store.dispatch(ReminderCounter(Number(document.getElementById('input').value)))}}>Reminder</button><br />
            <button className="btn btn-dark mb-3" onClick={()=> {store.dispatch(OddEvenCounter(Number(document.getElementById('input').value)))}}>OddEven</button><br />
        </div>
    )
}

const rootelement = document.getElementById('root');
const render = () => ReactDom.render(<App />, rootelement);
render();
store.subscribe(render)
