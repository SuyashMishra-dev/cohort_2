import React, { Component } from 'react'
let arr = [];
var item = JSON.parse(localStorage.getItem("arr"));
if(item === null){

}
else{arr = [...item ]}

class Create extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           id:0,
           playername:'',
           country:'',
           t20:0,
           odi:0,
           test:0,
        }
      }
      handleChange=(event)=>{
          event.preventDefault();
           this.setState({
               [event.target.name]:event.target.value
              });
       }
       handleSubmit=(event)=>{
          event.preventDefault();
          var obj={
              uid:this.state.id++,
              playername:this.state.playername,
              country:this.state.country,
              t20:this.state.t20,
              odi:this.state.odi,
              test:this.state.test
          }
          arr.push(obj);
          localStorage.setItem("arr",JSON.stringify(arr));
       }
  render() {
    return (
      <div>
        <h1 className = "text-center text-light mt-5">Create Player </h1> 
        <div className = "App w-50 mt-2 rounded-pill offset-3 mt-5" style = {{backgroundColor: "rgba(0,0,0,0.5)"}}>
        <form onSubmit = {this.handleSubmit}>
          <input type = "text" className = "w-50 mt-2 rounded-pill text-center" placeholder = "Player Name" name = "playername" value = {this.state.playername} onChange = {(e)=>this.handleChange(e)}></input><br></br>
          <select className = " custom-select w-50 mt-2 rounded-pill" name = "country" value = {this.state.country} onChange = {(e)=>this.handleChange(e)}>
                  <option value = " ">SELECT COUNTRY</option>
                  <option value = "India">INDIA</option>
                  <option value = "England">England</option>
                  <option value = "Pakistan">Pakistan</option>
                  <option value = "New Zealand">New Zealand</option>
                  <option value = "Australia">Australia</option>
                  <option value = "Zimbabwe">Zimbabwe</option>
                  <option value = "USA">USA</option>
                  <option value = "Canada">Canada</option>
                  <option value = "China">China</option>
                  <option value = "West Indies">West Indies</option>
          </select> <br></br>
          <input className = "text-center w-50 mt-2 rounded-pill" type = "number" name="t20" value = {this.state.t20} placeholder = "Enter T20 Score" onChange = {(e)=>this.handleChange(e)}></input><br></br>
          <input className = "text-center w-50 mt-2 rounded-pill" type = "number" name="odi" value = {this.state.odi} placeholder = "Enter ODI Score" onChange = {(e)=>this.handleChange(e)}></input><br></br>
          <input className = "text-center w-50 mt-2 rounded-pill" type = "number" name="test" value = {this.state.test} placeholder = "Enter Test Score" onChange = {(e)=>this.handleChange(e)}></input><br></br>
          <button className = "btn-outline-danger w-50 mt-2 mb-4 rounded-pill">Submit</button>
        </form> 
      </div>
      </div>
    )
  }
}
export default Create;