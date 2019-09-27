import React from 'react';

import axios from 'axios';
import GithubSearch from './components/session_1/GithubSearch';
import List from './components/session_1/List'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      reposData:[],
      query: ''
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ query: e.target.value });
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state.query);
    axios('https://api.github.com/search/users?q=' + this.state.query)
      .then(response => {
      
        this.setState({ data: response.data.items })
        console.log(response.data.items)
      })
      .catch(error => console.log(error))

  }
  moreInfo = (reposurl) => {

    axios(reposurl)
      .then(response => {
        console.log(response)
        this.setState({ reposData: response.data })
       
      })
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div>
        <input value={this.state.query} onChange={this.handleChange}></input>
        <button type="submit" onClick={this.handleClick}>submit</button>
        {this.state.data.map(ele => <GithubSearch imp={ele} func={(reposurl) => this.moreInfo(reposurl)} />)}
        {this.state.reposData.map(ele => <List imp={ele} />)}
      </div>
    )
  }
}
export default App;


  

 




