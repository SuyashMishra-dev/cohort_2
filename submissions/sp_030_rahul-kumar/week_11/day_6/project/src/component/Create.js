import React from 'react'
import {connect} from "react-redux"
import {Add} from './redux/action'

import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Capital:"",
            Continent:"Asia",
            GDP:"",
            Population:'',
        }
       
    }
    handleSubmit=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(e.target.value)
    }
    save=()=>{
        console.log("im here in save")
    }
    render(){
        console.log(this.props.val)
        return (
            <Router>
            <div className="container-fluid col-3" >
                <h3>Add the information about the Country</h3>
                <label>Capital</label>
               <input class="col-auto" name="Capital" onChange={(e)=>this.handleSubmit(e)}></input>
               <div class="form-group">
                    <label for="exampleFormControlSelect1">Continent</label>
                    <select class="col-auto mb-2" name="Continent" onChange={(e)=>this.handleSubmit(e)} class="form-control" id="exampleFormControlSelect1">
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Africa">Africa</option>
                    <option value="Europe">North-America</option>
                    <option value="North-America">South-America</option>
                    <option value="Australia">Australia</option>
                    <option value="Antarctica">Antarctica</option>
                </select>
                </div>
               <label>GDP</label>
               <input class="col-auto" name="GDP" onChange={(e)=>this.handleSubmit(e)}></input>
               <label>Population</label>
               <input class="col-auto" name="Population" onChange={(e)=>this.handleSubmit(e)}></input>
               <br>
               </br>
               <button class="btn btn-primary mb-2" onClick={()=>this.props.insertadd(this.state)}>Submit</button>
                
            </div>
            </Router>
            
        )
    }

}


const mapDispatchToProps=(dispatch)=>{
            return{
                insertadd:(val)=>dispatch(Add(val))
            }
}

export default connect(
    null,
    mapDispatchToProps
)(Home);