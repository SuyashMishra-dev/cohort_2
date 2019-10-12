import React, { Component } from 'react'
let arr=[];
var item =JSON.parse(localStorage.getItem("arr"));
if(item ===null){}
else{arr=[...item ]}

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
        console.log(this.state)
       }
  render() {
    return (
        
        <div className = "App">
          <h1 className="text-center">Create Player </h1> 
        <form onSubmit={this.handleSubmit}>
        <input type="text" className="" name="playername" value={this.state.playername} onChange={(e)=>this.handleChange(e)}></input><br></br>
        <select className=" w-40" name="country" value={this.state.country} onChange={(e)=>this.handleChange(e)}>
                <option value=" ">SELECT COUNTRY</option>
                <option value="India">INDIA</option>
                <option value="England">England</option>
                <option value="Pakistan">Pakistan</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Australia">Australia</option>
                <option value="Zimbabwe">Zimbabwe</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="China">China</option>
                <option value="West Indies">West Indies</option>
        </select> <br></br>
        <input className = "text-center" type="number" name="t20" value={this.state.t20} placeholder="Enter T20 Score" onChange={(e)=>this.handleChange(e)}></input><br></br>
        <input className = "text-center" type="number" name="odi" value={this.state.odi} placeholder="Enter ODI Score" onChange={(e)=>this.handleChange(e)}></input><br></br>
        <input className = "text-center" type="number" name="test" value={this.state.test} placeholder="Enter Test Score" onChange={(e)=>this.handleChange(e)}></input><br></br>
        <button className="btn-outline-danger">Submit</button>
        </form> 
      </div>
    )
  }
}
export default Create;