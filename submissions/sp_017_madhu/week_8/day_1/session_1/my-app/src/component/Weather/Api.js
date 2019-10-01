import React from 'react';
import axios from 'axios';
import Items from './component/Git/Items';
import Details from './component/Git/Details';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      query: '',
      reponseData:[],
    }
  }
  handleChange = (event) =>{
    event.preventDefault();
    this.setState({query: event.target.value});
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
      this.setState({reponseData: response.data})
    })
  }
  
  render () {
    return(
      <div className="text-center container">
        <h1 className="bg-success mt-5">Enter here to search Accounts from GIT</h1>
        <label>Enter Your GitHub Account Name:-</label>
        <input value={this.state.query} onChange={this.handleChange}></input>
        <button className="bg-blue"type='submit' onClick={this.handleClick}> Submit</button>
        { this.state.data.map(element => <Items inp ={element} func = {(reposUrl) => moreInfo(reposUrl)} />)}
        { this.state.reposData.map(ele=> <Details inp ={ele} />)}
      </div>
    )
  }
}



