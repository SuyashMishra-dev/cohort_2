import React from 'react'
import {connect} from "react-redux"
import {Add} from './../redux/action'
import Display from './display'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
class Home extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Capital:"",
            Continent:'',
            Gdp:"",
            Population:""
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
            <div>
                <label>Capital</label>
               <input name="Capital" onChange={(e)=>this.handleSubmit(e)}></input>
               <p></p>
               <label>Continent</label>
               
               <input name="Continent" onChange={(e)=>this.handleSubmit(e)}></input>
               <p></p>
               <label>GDP</label>
               <input name="Gdp" onChange={(e)=>this.handleSubmit(e)}></input>
               <p></p>
               <label>Population</label>
               <input name="Population" onChange={(e)=>this.handleSubmit(e)}></input>
               <button onClick={()=>this.props.insertadd(this.state)}>Submit</button>
                
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