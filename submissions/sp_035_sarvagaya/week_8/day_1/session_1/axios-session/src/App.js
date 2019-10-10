import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      firstInput: "",
      url: "",
      login: "",
      id: "",
      git_url:"",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleGet = this.handleGet.bind(this);
    this.handleGetAgain = this.handleGetAgain.bind(this);

  }
  handleChange(e)
  {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleGet(event)
  {
    event.preventDefault();
    axios.get("https://api.github.com/search/users?q="+this.state.firstInput).then(response => {
      console.log(response.data.items[0])
      this.setState({
        url: response.data.items[0].avatar_url,
        login: response.data.items[0].login,
      })
    })
  }

  handleGetAgain(event)
  {
    event.preventDefault();
    axios.get("https://api.github.com/search/users?q="+this.state.firstInput).then(response => {
      console.log(response.data.items[0])
      this.setState({
        id: response.data.items[0].id,
        git_url:response.data.items[0].html_url,
      })
    })
  }

  render()
  {
    return (
      <div className="App">
        <div className="bg-secondary text-dark">
          <h1>Github User Search Application</h1>
        </div>
        <br /><br />
        <div>
          <label htmlFor="username">Enter Username:</label>
          <input type="text" onChange = {this.handleChange} name="firstInput" value = {this.state.firstInput}></input>
          <br />
          <br />
          <button className="text-light bg-dark" type="submit" onClick = {this.handleGet}>Search User</button>
          <h4>Click On the image to see more info about the user</h4>
          {this.state.url ? (<div>{<button onClick = {this.handleGetAgain}><img src={this.state.url}></img></button>}</div>) : (<></>)}
          {this.state.login ? (<h1>Name:{this.state.login}</h1>) : (<></>)}
          {this.state.id ? (<h4>ID:{this.state.id}</h4>) : (<></>)}
          {this.state.git_url ? (<h5>Click to visit Github Profile:<a href={this.state.git_url}>Git Url</a></h5>) : (<></>)}
        </div>
      </div>
    );
  }
}

export default App;
