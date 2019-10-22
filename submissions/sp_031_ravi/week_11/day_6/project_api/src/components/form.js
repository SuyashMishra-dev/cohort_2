import React, { Component } from 'react'
import { connect } from 'react-redux'
import addDetails from './../redux/action'

let Details=[];
var a=JSON.parse(localStorage.getItem("Details"));
if(a===null){}
else{Details=[...a]}

class Create extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           capital:'',
           continent:'',
           gdp:'',
           population:'',
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
                county:this.props.match.params.country,
                Capital:this.state.capital,
                Continent:this.state.continent,
                Gdp:this.state.gdp,
                Population:this.state.population
          }	
          Details.push(obj);
          localStorage.setItem("Details",JSON.stringify(Details));
        console.log(this.state)
       }
  render() {
      console.log(this.props)
    return (
        <div style={{marginLeft:"180px",marginTop:"60px"}}>
          <h3 className="offset-2 mb-5 " style={{marginRight:"200px"}} >ADD INFORMATION ABOUT COUNTRY </h3> 
          <form onSubmit={this.handleSubmit}>
            <h6 style={{textAlign:'center'}}>Capital</h6>
            <input type="text" className="form-control w-40 mb-2 mr-5 col-3" style={{textAlign:'center',marginLeft:'440px'}} required name="capital" value={this.state.capital} onChange={(e)=>this.handleChange(e)}></input>
            <h6 style={{textAlign:'center'}}>Continent</h6>
            <input type="text" className="form-control w-40 mb-2 mr-5 col-3" style={{textAlign:'center',marginLeft:'440px'}} required name="continent" value={this.state.continent} onChange={(e)=>this.handleChange(e)}></input>
            <h6 style={{textAlign:'center'}}>GDP</h6>
            <input type="text" className="form-control col-3 mb-2" style={{textAlign:'center',marginLeft:'440px'}} required name="gdp" value={this.state.gdp} placeholder="" onChange={(e)=>this.handleChange(e)}></input>
            <h6 style={{textAlign:'center'}}>Population</h6>
            <input type="text" className="form-control w-60 mb-2 ml-8 col-3" style={{textAlign:'center',marginLeft:'440px'}}  required name="population" value={this.state.population} placeholder="" onChange={(e)=>this.handleChange(e)}></input>
            <button className="btn btn-secondary w-40 " >Submit</button>
          </form> 
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  console.log("mapDispatch to props")
  return{
    add:value => dispatch(addDetails(value))
  }
}

export default connect(null,mapDispatchToProps) (Create);
