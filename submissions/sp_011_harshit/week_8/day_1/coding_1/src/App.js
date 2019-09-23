import React from "react";
import axios from "axios";
import Display from './apidata/Display'




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      info:[],
      status: false,
      value:''
    };
  }
handleNameChange =(e)=>{
  this.setState({
    value:e.target.value
    
  })
  console.log(this.state.value)
}





display = (val) => {

  console.log('hi ')
  console.log(val)
  const param2 = {
    method: "get",
    url: val
  }
  axios(param2)
    .then(response => {
      console.log(response)
      this.setState({
        info: response
      });
      // console.log(this.state.info)
  
    })
    .catch(err => console.log(err))
  }


handleCLick = () =>{


  
    const requestParam = {
      method: "get",
      url: "https://api.github.com/search/users?q="+this.state.value,
    
    }
    axios(requestParam)
      .then(response => {
        
        this.setState({
          data: response.data,
          status: true
        });
        // console.log(this.state.data);
      })
      .catch(err => console.log(err))
  }

 


  render() {
    return (
      <div >
        <input onChange={(e)=>this.handleNameChange(e)} value={this.state.value}></input>
        <button onClick={()=>this.handleCLick()}>click</button>
        {this.state.status ? (
               <Display {...this.state.data} fun={(e,x)=>this.display(x)} /> 
        ) : (
          <h1>Still trying to get data</h1>
        

        )}
       {/*   */}
      </div>
    );
  }
}

export default App;
