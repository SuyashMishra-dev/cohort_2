import React from "react"
import {connect} from "react-redux"
import {fetchlogin,fetchinfo} from "./reducer"

class Login extends React.Component{
    constructor(props){
    super(props)
    this.state={
            username:'',
            password:'',
            
    }
}
handleChange=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            })
            //console.log(this.state.password)
}

render()
{
    
     let a=null
     let disp=null
    if(this.props.flagvalue===true)
    {
        
        this.props.fetch(this.state.username,this.props.tokenvalue)
        a=this.props.tokenvalue
    }
    if(this.props.displaynow===true)
    {
        disp="Username:"+this.props.user_info.username+"    Mobile: "+this.props.user_info.mobile+"     Name:"+this.props.user_info.name
    }
    console.log(this.props.tokenvalue)
    return(
        <div className="container">
            <div className="col-xl-3">
                <input type="password" name={"password"} placeholder={"password"} onChange={(e)=>this.handleChange(e)} required></input>
                <input type="text" name={"username"} placeholder={"Username"} onChange={(e)=>this.handleChange(e)} required></input>
                <button onClick={()=>this.props.log(this.state)}>Login</button>
                {this.props.displaynow?<div>loginsuccess</div>:<div>Not Logged in</div>}
             <h3>{disp}</h3>
            </div>
               
        </div>
    )
}
}

const mapStateToProps=(state)=>{
console.log(state,'state')
    return  {
               flagvalue : state.flag,
              tokenvalue : state.token,
              user_info : state.info,
              displaynow:state.displaylast
                }
}
const mapDispatchToProps=(dispatch)=>{
return{
    log:(val)=>dispatch(fetchlogin(val)),
    fetch:(val1,val2)=>dispatch(fetchinfo(val1,val2))
}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);