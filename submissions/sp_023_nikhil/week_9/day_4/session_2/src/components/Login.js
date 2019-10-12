import React from 'react'

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            username:"",
            user:[],
            password: "",
            pass:[]
        }
        this.handlePassword = this.handlePassword.bind(this)
        this.handleUsername = this.handleUsername.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleUsername(e){
        this.setState({username: e.target.value})
        // console.log(this.state.username)
    }
    handlePassword(e){
        this.setState({password: e.target.value})
        // console.log(this.state.password)
    }
    handleClick(){
        let arr = this.state.user
        let arr2 = this.state.pass
        arr.push(this.state.username)
        arr2.push(this.state.password)
        this.setState({
            user: arr,
            pass: arr2
        })
        console.log(this.state.user, this.state.pass)
    }
    render() {
        return(
            <React.Fragment>
                <label>Username</label>
                <input value={this.state.username} onChange={this.handleUsername} type="text" />
                <label>Password</label>
                <input value={this.state.password} onChange={this.handlePassword} type="password" />
                <button onClick={this.handleClick}>Login</button>
            </React.Fragment>
        )
    }
}

export default Login