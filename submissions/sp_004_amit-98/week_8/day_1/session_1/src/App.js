import React from 'react';
import './App.css';
import axios from 'axios';
import Item from './components/item'
import List from './components/list'



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      query:"",
      reposData: []
    };
  }
  handleChange=(e)=>{
    e.preventDefault();
    this.setState({query:e.target.value});
  }
  handleClick=(e)=>{
    e.preventDefault();
    console.log(this.state.query)
    axios("https://api.github.com/search/users?q="+this.state.query)
     .then(response=>{
     this.setState({data: response.data.items})
     console.log(response.data.items)
     })
     .catch(error => console.log(error)) 
  }
  moreInfo=(reposurl)=>{
    axios(reposurl)
    .then(response=>{
      console.log(response)
      this.setState({reposData: response.data})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <input value={this.state.query} onChange={this.handleChange}></input>
        <button type="submit" onClick={this.handleClick}>Submit</button>
        {this.state.reposData.map(ele=><List inp={ele}/>)}
        {this.state.data.map(ele=><Item inp={ele} func={(reposurl)=>this.moreInfo(reposurl)}/>)}
        
      </div>
    );
  }
}
export default App;
