import React from 'react';
import {createStore} from 'redux'
import { incrByx,decrByx,incrByx1,incrByx2,mulByx,divByx,remByx } from "./action";
import reducer from './reducer';


class App extends React.Component { 
  constructor () {
    super();
    this.state = {
      x : 0,
      count : null
    }
    this.store = createStore(reducer);
    
  }

  setCountVar = () => {
    this.setState({
      count : this.store.getState().count
    })    
    
  }

  componentDidMount () {
    console.log(this.store.getState().count);
    
    this.unsubscribe = this.store.subscribe(this.setCountVar);
    
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  handleChange = (e) => {
    this.setState({
      x : e.target.value
    })
  }

  render () {
    return (
      <div>
        
        Count from this state : {this.state.count}
        Count from redux store : {this.store.getState().count}
        <br />
        <input type='text' value={this.state.x} onChange={this.handleChange} />
        <button onClick={()=>this.store.dispatch(incrByx(this.state.x))}>INCR BY X</button>
        <button onClick={()=>this.store.dispatch(decrByx(this.state.x))}>DECR BY X</button>

        <button onClick={()=>this.state.x % 2 == 0 ? this.store.dispatch(incrByx2(this.state.x)) : this.store.dispatch(incrByx1(this.state.x)) }>INCR BY X</button>
 
        <button onClick={()=>this.store.dispatch(mulByx(this.state.x))}>MUL BY X</button>
        <button onClick={()=>this.store.dispatch(divByx(this.state.x))}>DIV BY X</button>
        <button onClick={()=>this.store.dispatch(remByx(this.state.x))}>REM BY X</button>
      </div>
    )
  }
}

export default App;
