import React, { Component } from 'react'


let playerDetails=[];
var a=JSON.parse(localStorage.getItem("playerDetails"));
if(a===null){}
else{playerDetails=[...a]}

class Create extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           id:0,
           name:'',
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
              id:this.state.id++,
              name:this.state.name,
              playerName:this.state.playerName,
              country:this.state.country,
              t20:this.state.t20,
              odi:this.state.odi,
              test:this.state.test
          }
          playerDetails.push(obj);
          localStorage.setItem("playerDetails",JSON.stringify(playerDetails));
        console.log(this.state)
       }
  render() {
    return (
        <div style={{marginLeft:"250px",marginTop:""}}>
          <h1 className="offset-2 mb-5">ADD INFORMATION ABOUT PLAYER </h1> 
          <form onSubmit={this.handleSubmit}>
            <h5 >Player Name</h5>
            <input type="text" className="form-control w-40 mb-4 mr-5" required name="playerName" value={this.state.playerName} onChange={(e)=>this.handleChange(e)}></input>
            <h5>Country</h5>
            <select className="form-control w-40" name="country" value={this.state.country} onChange={(e)=>this.handleChange(e)}>
                    <option value=" ">SELECT COUNTRY</option>
                    <option value="India">INDIA</option>
                    <option value="Australia">AUSTRALIA</option>
                    <option value="England">ENGLAND</option>
                    <option value="South Africa">SOUTH AFRICA</option>
                    <option value="Pakistan">PAKISTAN</option>
                    <option value="Bangladesh">BANGLADESH</option>
                    <option value="Sri Lanka">SRI LANKA</option>
                    <option value="New Zealand">NEW ZEALAND</option>
                    <option value="Afganistan">AFGANISTAN</option>
                    <option value="West Indies">WEST INDIES</option>
            </select> 
            <h5>T-20 Score</h5>
            <div className="col-4 ">
              <input type="text" className="form-control" required name="t20" value={this.state.t20} placeholder="" onChange={(e)=>this.handleChange(e)}></input>
            </div>
            <h5>ODI Score</h5>
            <input type="text" className="form-control w-60 mb-4 mr-5" required name="odi" value={this.state.odi} placeholder="" onChange={(e)=>this.handleChange(e)}></input>
            <h5>Test Score</h5>
            <input type="text" className="form-control w-40 mb-4 mr-5" required name="test" value={this.state.test} placeholder="" onChange={(e)=>this.handleChange(e)}></input>
            <br></br>
            <button className="btn btn-secondary w-40 ">Submit</button>
          </form> 
      </div>
    )
  }
}
export default Create;