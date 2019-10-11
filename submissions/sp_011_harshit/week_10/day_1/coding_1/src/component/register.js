import React from "react"
import {connect} from "react-redux"

import {fetchdata,Registeruser} from './reducer'

class Register extends React.Component{
    constructor(props){
    super(props)
    this.state={
                name:'',
                email:'',
                password:'',
                username:'',
                mobile:'',
                description:'',
              
    }
}
handleChange=(val)=>{
    this.setState({
        [val.target.name]: val.target.value
    })
    console.log(this.state.name)
   
}


render()
{
    
    return(
        <div className="offset-1 ">
           
            <div  className="col-xl-3 mt-2">
            <label >Enter name</label>
            <input className="ml-2" name={"name"}  onChange={(e)=>this.handleChange(e)} ></input>
            </div>
            <div className="col-xl-3 mt-2">
            <label>Enter Email</label>
            <input className="ml-3" name={"email"} onChange={(e)=>this.handleChange(e)}></input>
            </div>
            <div  className="col-xl-3 mt-2">
            <label>Password</label>
            <input className="ml-3" name={"password"} onChange={(e)=>this.handleChange(e)}></input>
            </div>
            <div className="col-xl-3 mt-2">
            <label>Username</label>
            <input className="ml-2" name={"username"} onChange={(e)=>this.handleChange(e)}></input>
            </div>
            <div className="col-xl-3 mt-2">
            <label>Mobile</label>
            <input className="ml-2" name={"mobile"} onChange={(e)=>this.handleChange(e)}></input>
            </div>
            <div className="col-xl-3 mt-2">
            <label>Description</label>
            <input className="ml-2" name={"desc"} onChange={(e)=>this.handleChange(e)}></input>
            </div>
            <div className="col-xl-3 mt-2">
          
           {/* <input className="btn btn-primary" type="submit" value="feed"/> */}
            <button onClick={()=>this.props.reg(this.state)}>add</button>
            </div>
           
            
           
        </div>
    )
}
}
// const mapStateToProps = ()=>{

// }
const mapDispatchToState= (dispatch)=>{
    return{
        reg:(val)=>dispatch(fetchdata(val))
    }
}
export default connect(
    null,
    mapDispatchToState
)(Register);