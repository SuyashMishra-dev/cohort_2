import React, { Component } from 'react'
import { addPlayer } from './actions/action';
import { connect } from 'react-redux';
let playerDetails=[];
let arrCountry=["INDIA","AUSTRALIA","ENGLAND","SOUTH AFRICA","PAKISTAN","BANGLADESH","SRI LANKA","NEW ZEALAND","AFGANISTAN","WEST INDIES"];
// localStorage.removeItem("playerDetails")
var a=JSON.parse(localStorage.getItem("playerDetails"));
if(a===null){}
else{playerDetails=[...a]}

class Create extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           id:null,
           playerName:'',
           country:'INDIA',
           t20:null,
           odi:null,
           test:null,
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
          this.props.add(obj);
          playerDetails.push(obj);
          localStorage.setItem("playerDetails",JSON.stringify(playerDetails));
          console.log(this.state)
       }
  render() {
    let showOption = arrCountry.map(item=>{
      return(
<option value={item}>{item}</option>
      )
        
      
      })
    return (
        <div style={{marginLeft:"700px",marginTop:"120px"}}>
          <h1 className="offset-2 mb-5">ADD PLAYER</h1> 
        <form onSubmit={this.handleSubmit}>
        <h5 >Player Name</h5>
        <input type="text" className="form-control w-50 mb-4" required name="playerName" value={this.state.playerName} onChange={(e)=>this.handleChange(e)}></input>
        <h5>Country</h5>
        <select className="form-control w-50" name="country" value={this.state.country} onChange={(e)=>this.handleChange(e)}>
                
                {showOption}
                {/* <option value=" ">SELECT COUNTRY</option>
                <option value="India">INDIA</option>
                <option value="Australia">AUSTRALIA</option>
                <option value="England">ENGLAND</option>
                <option value="South Africa">SOUTH AFRICA</option>
                <option value="Pakistan">PAKISTAN</option>
                <option value="Bangladesh">BANGLADESH</option>
                <option value="Sri Lanka">SRI LANKA</option>
                <option value="New Zealand">NEW ZEALAND</option>
                <option value="Afganistan">AFGANISTAN</option>
                <option value="West Indies">WEST INDIES</option> */}
        </select> 
        <h5>T-20 Score</h5>
        <input type="number" className="form-control w-50 mb-4" required name="t20" value={this.state.t20} placeholder="Enter T-20 Runs" onChange={(e)=>this.handleChange(e)}></input>
        <h5>ODI Score</h5>
        <input type="number" className="form-control w-50 mb-4" required name="odi" value={this.state.odi} placeholder="Enter ODI Runs" onChange={(e)=>this.handleChange(e)}></input>
        <h5>Test Score</h5>
        <input type="number" className="form-control w-50 mb-4" required name="test" value={this.state.test} placeholder="Enter Test Runs" onChange={(e)=>this.handleChange(e)}></input>
        <button className="btn btn-primary w-50">ADD</button>
        </form> 
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => {
  console.log("map Dispatcher called TODO app");
  return {
    add: item => dispatch(addPlayer(item))
  };
};
export default connect(null,mapDispatchToProps)(Create);
