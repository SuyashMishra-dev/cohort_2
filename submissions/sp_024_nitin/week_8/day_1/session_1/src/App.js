import React from 'react';
import axios from 'axios';
//import toDisplayUser from './Components/toDisplayUser';


class App extends React.Component {                   //to prepare a space to accept the input similar to using var
  constructor() {
    super();
    this.state = {
      query: "",
      data : []
    }
  }
  
  takeIn(event) {
    event.preventDefault()                                    //the field which holds the input-ted command by redirecting to query line 10
    this.setState({query: event.target.value})
  }

  subbtn(event) {
    event.preventDefault()
    axios("https://api.github.com/search/users?q=" + this.state.query)            //the field which sends the input to the api in order to get response
      .then(response => {
        this.setState({data: response.data.items})
        console.log(response.data.items);
      }) 
      
    }

  render() {                                  //this is so that we can create multiple component   
    return (
      <div>                                                   
        <input value = {this.state.query} onChange = {(event) => this.takeIn(event)}></input>       
        <button onClick = {(event => this.subbtn(event))}>Submit</button>
        {this.state.data.map((items) => {return (<div>{items}</div>)})}
      </div>
     
        
      )
    
  }   //line 33 - to create an input field
}     //line 34 - to create an event that accepts the desired input.

export default App;