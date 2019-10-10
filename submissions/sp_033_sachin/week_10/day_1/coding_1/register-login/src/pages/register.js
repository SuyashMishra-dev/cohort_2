import React from 'react';

//redux
import { registerUser } from "../redux/register/register.actions";
import { connect } from "react-redux";

class Register extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name : '',
            email : '',
            password : '',
            username : '',
            mobile : '',
            description : ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const data = {...this.state}
        const {registerUser} = this.props;

        registerUser(data);

    }

    render() {
        const {name,email,password,username,mobile,description} = this.state;
        const {error, response, isLoading} = this.props;
        return (
            <>  <div className='container'>
                <h1>Register</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" onChange={this.handleChange} value={name} className="form-control" name='name' placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" onChange={this.handleChange} value={email} className="form-control" name='email' aria-describedby="emailHelp"
                            placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={this.handleChange} value={password} className="form-control" name='password' placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="text" onChange={this.handleChange} value={username} className="form-control" name='username' placeholder="User Name" />
                    </div>
                    <div className="form-group">
                        <label>Mobile</label>
                        <input type="text" onChange={this.handleChange} value={mobile} className="form-control" name='mobile' placeholder="8867726007" />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" onChange={this.handleChange} value={description} className="form-control" name='description' placeholder="Description" />  
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                {
                    isLoading?'Loading':''
                    
                }
                {
                    response?response.message:''
                }
                
                </div>
            </>
        )
    }
}

const mapStateToProps = ({register : {error, response, isLoading}}) => ({
    error,
    response,
    isLoading
})

const mapDispatchToProps = dispatch => ({
    registerUser : (data) => dispatch(registerUser(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Register);