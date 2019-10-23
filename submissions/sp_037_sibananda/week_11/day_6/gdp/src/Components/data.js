import React, { Component } from 'react'
import axios from 'axios'
import {  Link } from 'react-router-dom'

class Data extends Component {
  state = {
    posts: []
  }
  componentDidMount(){
    axios.get('https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json')
      .then(res => {
        console.log(res);
        this.setState({
            posts:res.data.slice(0,100)
        })
        
      })
  }
  render(){
      return(
        <div>  
            
               <ol>
        {this.state.posts.map(country=>
        <Link to="/Home"><li>{country.name}</li></Link>)}
        
    </ol></div>
 )
  }
}

export default Data