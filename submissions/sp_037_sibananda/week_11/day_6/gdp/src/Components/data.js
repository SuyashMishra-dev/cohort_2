import React, { Component } from 'react'
import axios from 'axios'

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
            <button>Data</button>
               <ol>
        {this.state.posts.map(country=><li>{country.name}</li>)}
        
    </ol></div>
 )
  }
}

export default Data