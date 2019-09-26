import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Items from './Components/Items'


class NameForm extends Component {
  constructor() {
    super();
    this.state = {
      data : [],
      username : '' //object to store user input 
    };
  }

  //this function will helps to set object in which we have to store
  handleChange =(e) => {
    e.preventDefault();
    this.setState({username: e.target.value})
    }
  

  handleSubmit=(e) => {
    e.preventDefault();
    console.log(this.state.username);

    axios('https://api.github.com/search/users?q='+this.state.username)
    .then(response => {
      console.log(response.data.items)
      this.setState({data: response.data.items})  
    
    })
    .catch(error => console.log(error))

  }

  info = (e,url) => {
    axios(url)
    .then(response => {
      console.log(response)
    })
  }  
  
  
  
  render() {
    let a = this.state.data.map(a => <Items input={a}/>)
    return (
      <div>
        <input value={this.state.username} onChange={this.handleChange} type="text"></input>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
        {a}
      </div>
      
    );
  }

}


export default NameForm
