import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Todo from './components/Todo'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items : [],
      value: "",
    }
  }

  handleSubmit = (event) => {
    let temp = {listItem: this.state.value, isCompleted: false}
    this.setState({
      items: [...this.state.items, temp],
    })
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  changeStatus(id) {
    let temp = this.state.items.filter((ele, i) => {
      if(id == i) {
        ele.isCompleted = !ele.isCompleted;
      }
      return ele;
    });
    this.setState({
      items: temp
    })
  }

  removeItem(id) {
    console.log(this.state);
    let temp = this.state.items.filter((ele,i) => i != id)
    this.setState({
      items: temp
    })
  }

  render() {

    console.log(this.state.items);
    return (
      <div className="container m-5">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-5">
              <input className="form-control" value={this.state.value} onChange={this.handleChange}></input>
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary" type="submit">Add</button>
            </div>
          </div>
        </form>
        <div>
          <Todo change={(e,i)=>{this.changeStatus(i)}} remove={(e,i)=>{this.removeItem(i)}} listData={this.state.items}/>
        </div>
      </div>
    )
  }
}

export default App;
