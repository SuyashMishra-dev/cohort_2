import React from 'react';

import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';

import { loginUser, saveUsername, getUser } from '../redux/action';

import AuthInputField from '../components/AuthInputField';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.saveUsername(this.state.username);
        this.props.login(this.state);
    }

    render() {
        const inputFields = [
            {
                label: 'Username',
                type: 'text',
                name: 'username',
                placeholder: 'Enter Your Username',
            },
            {
                label: 'Password',
                type: 'password',
                name: 'password',
                placeholder: 'Enter Your Password',
            }
        ]
        return (
            <div className='container'>
                {this.props.isAuth ? (
                    <>
                    {this.props.getUser(this.props.username, this.props.token)}
                    <Redirect to={{pathname: `/user/${this.props.username}`}} />
                    </>
                ) : (
                    <div className='row align-items-center'>
                        <div className='col-md-4 offset-md-4 p-5' style={{backgroundColor: '#f8f9fa'}}>
                            <h2 className='text-center mb-5'>Log In</h2>
                            <form className='needs-validation' no-validate='true' onSubmit={(e) => this.handleSubmit(e)}>
                                {inputFields.map((ele, i) => <AuthInputField data={ele} func={this.handleInput} key={i} />)}
                                <button type='submit' className='btn btn-primary mt-3' style={{width: '100%', marginBottom: '30px'}}>Submit</button>
                            </form>
                        </div>
                    </div>
                )} 
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        login: (query) => {
            dispatch(loginUser(query));
        },
        saveUsername: (username) => {
            dispatch(saveUsername(username));
        },
        getUser: (username, token) => {
            dispatch(getUser(username, token))
        }
    })
}

const mapStateToProps = state => {
    console.log(state.token);
    return ({
        isAuth: state.isAuth,
        token: state.token,
        username: state.username
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);