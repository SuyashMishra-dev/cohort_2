import React from 'react';
import TodoItem from "./components/TodoItem"
class App extends React.Component {
  constructor() {
    super()

    this.state = {
      value: '',
      data: []
    }

  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({ value: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ data: [...this.state.data, { name: this.state.value, isDone: false }] })
  }
  changeStatus = (key) => {
    let temp = this.state.data.filter((element, index) => {
      if (key == index) {
        element.isDone = !element.isDone
      }
      return element
    })
    this.setState({ data: temp })
  }
  removeItem = (key) => {
    let temp = this.state.data.filter((element, index) => index != key)
    this.setState({ data: temp })
  }

  render() {
    console.log(this.state.data)
    return (
      <React.Fragment>
        <h1 className="text-primary">ToDo List</h1>
        <form class="form-inline mt-3" onSubmit={this.handleSubmit}>

          <div class="form-group mx-sm-3 ">
            
            <input type="input" class="form-control" placeholder="Enter Todo Item..." value={this.state.value} onChange={this.handleInput} />
          </div>
          <button type="submit" class="btn btn-primary mb-2">Add Todo</button>
        </form>

        <TodoItem data={this.state.data} checkDone={(e, index) => this.changeStatus(index)} removeTodo={(e, index) => this.removeItem(index)} />

      </React.Fragment>
    )
  }
}
export default App;
