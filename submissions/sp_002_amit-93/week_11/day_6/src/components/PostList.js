import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        countriesArr: []
       
      }
    }
    componentDidMount(){
      axios
        .get('https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json')
        .then((response)=>{
          const countriesArr = response.data;
          console.log(countriesArr)
          this.setState({ countriesArr });
          
          })
          
        }
  render() {
     let list= this.state.countriesArr.map(data=>{
         return(
        <div>
          <div>
          <div>{data.name}</div>
          <div>{data.code}</div>
          </div>
        
        </div>
      )         
      })
    return (
      <div>
        <div>
          <h2 style={{color: "blue"}}><Link to="/list">{list}</Link></h2>
        </div>
      </div>
    )
  }
}
export default PostList;