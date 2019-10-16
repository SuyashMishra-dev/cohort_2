import React from 'react'
import Todo from './component/todo.js';
import './App.css'
class App extends React.Component {
  constructor () {
    super();
    this.state = {
      value: '',
      data: []
    }
  }

  handleInput = (e) => {
      this.setState({value : e.target.value})

  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({data: [...this.state.data, {name: this.state.value, isFInished: false}]});
  }

changeStatus =(id) => {
  let temp = this.state.data.filter((ele,i) => {
    if(id == i) {
      ele.isFinished = !ele.isFInished
    }
    return ele;
  })

  this.setState({data : temp})
}
removeitem = (id) => {
  let temp = this.state.data.filter ((ele,i) => i != id);
  this.setState({data : temp})
}


  render() {
    return(
      <div className = "text-center">
        <h1>Your Personalize TODO</h1>
          <div className = "container mt-5">
            <form onSubmit = {this.handleSubmit}>
              <input className = "rounded-pill text-center" placeholder = "Enter Item" value = {this.state.value} onChange = {this.handleInput}></input>
            <button className= "btn btn-outline-danger" type = 'submit'>Add</button>
            </form>
            </div>
          <div>
            <Todo data = {this.state.data} changefunc = {(i) => this.changeStatus(i)} removefunc = {(i) => this.removeitem(i)}/>
          </div>
      </div>
    )
  }
}
export default App;
