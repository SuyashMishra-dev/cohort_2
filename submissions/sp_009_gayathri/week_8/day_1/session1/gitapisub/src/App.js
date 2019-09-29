import React from 'react';
import axios from 'axios';
import User from './components/User.js'

 class App extends React.Component{
   constructor()  {
      super();
      this.state = {
        data: [],
        qvalue: ' ',
        resposDt: []
      }
   }



handleChange= (event) => {
  event.preventDefault();
  this.setState({qvalue: event.target.value});

}

handleClick= (event) => {
  event.preventDefault()
  console.log(this.state.qvalue)
  axios('https://api.github.com/search/users?q='+ this.state.qvalue)
  .then(response => {
  this.setState({data: response.data.items})
  })
  .catch(error => console.log(error))
 } 

 moreDetails =(reposurl) => {
    axios(reposurl)
   .then(response =>{
     console.log(response)
     this.setState({resposDt: response.data})
   })
 }

render(){
  return(
    <div>
      <input value={this.state.qvalue} onChange={this.handleChange}></input>
      <button type='submit' onClick={this.handleClick}>Submit</button>
      {this.state.data.map(ele => <User inp={ele} fData={(event,reposurl) =>this.moreDetails(event,reposurl)} />)}
      
      </div>

        );
  }
  
}

export default App;
