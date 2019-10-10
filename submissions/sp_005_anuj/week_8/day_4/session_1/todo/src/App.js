import React from 'react'
import Todo from './component/index.js';
import './App.css'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';



class App extends React.Component {
  constructor (props) {
    super(props);
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
    this.setState({data: [...this.state.data, {name: this.state.value, isFinished: false}]});
  }

changeStatus =(id) => {
  let temp = this.state.data.filter((ele,i) => {
    if(id == i) {
      ele.isFinished = !ele.isFinished
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
      <div className="text-center">
        <h1>Your Personalize TODO</h1>
        <div className="container mt-5">
          <form onSubmit={this.handleSubmit}>
            <TextField
              label="Enter Item"
              type="text"
              value={this.state.value}
              onChange={this.handleInput}
            />
            <Fab size="small" color="secondary" aria-label="add" type="submit">
              <AddIcon />
            </Fab>
          </form>
        </div>
        <div>
          <Todo data={this.state.data} changefunc={(e, i) => this.changeStatus(i)} removefunc={(e, i) => this.removeitem(i)} />
        </div>
      </div>
    )
  }
}
export default App;
