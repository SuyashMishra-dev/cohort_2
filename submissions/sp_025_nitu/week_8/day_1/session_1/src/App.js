import React from 'react';
import axios from 'axios';
import Items from './Component/Items';
import List from './Component/list.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      query: '',
      reposData: []
    }
  }
  handleChange = (e) =>{
    e.preventDefault();
    this.setState({query: e.target.value});
  }
  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state.query)
    axios('https://api.github.com/search/users?q=' + this.state.query)
    .then(response => {
      console.log(response.data.items);
      this.setState({data:response.data.items})
    })
    .catch (error => console.log(error));

  
  }
  moreInfo =(reposurl) => {
    axios(reposurl)
    .then(response => {
      console.log(response);
      this.setState({reposData: response.data})
    })
  }
  
  render () {
    return(
      <div>
       <input value={this.state.query} onChange={this.handleChange}></input>
        <button type='submit' onClick={this.handleClick}> Submit</button>
       { this.state.data.map(ele => <Items inp ={ele} func = {(reposurl) => this.moreInfo(reposurl)} />)}
       {this.state.reposData.map(ele=> <List inp ={ele} />)}
      </div>
    )
  }
}

export default App;
