import React from 'react';
import axios from 'axios';
import Items from './component/Git/Items';
import List from './component/Git/List.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data:[],
      query:'',
      reposData:[],
    }
  }
  handleChange = (event) =>{
    event.preventDefault();
    this.setState({query: e.target.value});
  }
  handleClick = (event) => {
    event.preventDefault();
    console.log(this.state.query)
    axios('https://api.github.com/search/users?q=' + this.state.query)
    .then(response => {
      console.log(response.data.items);
      this.setState({data:response.data.items})
    })
    .catch (error => console.log(error));

  }
  moreInfo =(reposUrl) => {
    axios(reposUrl)
    .then(response => {
      console.log(response);
      this.setState({reposData: response.data})
    })
  }
  
  render () {
    return(
      <div className="text-center container">
        <h1 className="bg-success mt-5">Enter here to search Accounts from GIT</h1>
        <label>Enter Your GitHub Account Name:-</label>
        <input value={this.state.query} onChange={this.handleChange}></input>
        <button type='submit' onClick={this.handleClick}> Submit</button>
       { this.state.data.map(ele => <Items inp ={ele} func = {(reposUrl) => this.moreInfo(reposUrl)} />)}
       {this.state.reposData.map(ele=> <List inp ={ele} func = {(reposUrl) => this.moreInfo(reposUrl)}/>)}
      </div>
    )
  }
}

