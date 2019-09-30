import React from 'react';
import axios from 'axios';
import Gitdata from './components/gitdata'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      user: ''     
    }
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ user: e.target.value })
  }
  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state.user)
    axios('https://api.github.com/search/users?q=' + this.state.user)
      .then(response => {
        console.log(response.data.items);
        this.setState({ data: response.data.items })
      })
      .catch(error => console.log(error))

  }

  render() {
    return (
      <div>
        <input value={this.state.user} onChange={this.handleChange}></input>
        <button type="submit" onClick={this.handleClick}>search User</button>
        {this.state.data.map((element) => <Gitdata input = {element} />)}

      </div>
    )
  }
}
export default App;