import React from "react";

//redux
import { connect } from "react-redux";
import { loginUser } from "../redux/login/login.actions";

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : ''
        }
    }

    handleChange = (e) => {
       
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleClick = () => {
        
        const data = {
            ...this.state
        }

        this.props.loginUser(data)
    }

    render() {
        return (
            <>
                <div className='container'>
                    <h1>Login</h1>
                    <div class="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="text" onChange={this.handleChange} value={this.state.username} name='username' className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" onChange={this.handleChange} value={this.state.password} name='password' className="form-control" />
                            </div>
                            <button className="btn btn-primary" onClick={this.handleClick}>Submit</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    loginUser : data => dispatch(loginUser(data))
})

export default connect(null,mapDispatchToProps)(Login);