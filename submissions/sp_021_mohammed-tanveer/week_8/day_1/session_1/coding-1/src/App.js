import React from 'react';
import Axios from 'axios';
import Gitsearch from './Components/Gitsearch';
import Display from './Components/Display';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: [],
      query: '',
      userData: []
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({query:e.target.value});
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state.query)

    Axios('https://api.github.com/search/users?q=' + this.state.query)
    .then(response => {
      console.log(response.data.items)
      this.setState({data: response.data.items})
    })
    .catch(error => console.log(error))
  }

  moreInfo = ( reposurl) => {
  
    Axios(reposurl)
    .then(response => {this.setState({userData: response.data})})
    
    
  }

  render(){
    return(
      <div>
        <input type="text" value={this.state.query} onChange={this.handleChange} placeholder="Enter Username"/>
        <button type="submit" onClick={this.handleClick}>Submit</button>
        {this.state.data.map(gitData => <Gitsearch gitDetails={gitData} getRepos={(e, reposurl) => this.moreInfo(e, reposurl)} />)}
        {this.state.userData.map(eachData => <Display each={eachData} />)}
      </div>

    )
  }
}
