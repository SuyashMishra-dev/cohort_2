import React from 'react'
import {connect} from "react-redux"
import {register} from './../redux/reducer'

class Register extends  React.Component{
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
              <h1>Regitser</h1>
                <label>Email:</label>
                <input onChange={(e)=>this.handleChange(e)} name={"email"} ></input>
                <label>Password</label>
                <input type={"password"} onChange={(e)=>this.handleChange(e)} name={"password"}></input>
                <button onClick={()=>this.props.reg(this.state)}>save</button>
        </div>
    )
}
}
const mapStateToProps=()=>{
return{

}
}
const mapDispatchToProps=(dispatch)=>{
return{
            reg:(valpass)=>dispatch(register(valpass))
}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register);