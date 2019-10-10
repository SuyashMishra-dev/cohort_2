import React from 'react'
import {connect} from "react-redux"
import {login} from './../redux/reducer'

class Login extends  React.Component{
constructor(props){
    super(props)
    this.state={
            email:'',
            password:''
    }
}
handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
    // console.log(this.state.email)
    // console.log(this.state.password)
    }
render(){
    return(
        <div>
              <h1>Login</h1>
              <label>Email:</label>
                <input onChange={(e)=>this.handleChange(e)} name={"email"} ></input>
                <label>Password:</label>
                <input type={"password"} onChange={(e)=>this.handleChange(e)} name={"password"}></input>
                <button onClick={()=>this.props.loginfun(this.state)}>save</button>
        </div>
    )
}
}
const mapStateToProps=(state)=>{
return {
        state
}
}
const mapDispatchToProps=(dispatch)=>{
    return{
                    loginfun:(valuepass)=>dispatch(login(valuepass))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);