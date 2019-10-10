import React from 'react';

import { connect } from 'react-redux';

import { registerUser } from '../redux/action';

import AuthInputField from '../components/AuthInputField';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            username: '',
            mobile: '',
            description: ''
        }
    }

    handleInput = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.register(this.state);
    }

    render() {
        const inputFields = [
            {
                label: 'Name',
                type: 'text',
                name: 'name',
                placeholder: 'Enter Your Name',
            },
            {
                label: 'Email',
                type: 'email',
                name: 'email',
                placeholder: 'Enter your Email',
            },
            {
                label: 'Password',
                type: 'password',
                name: 'password',
                placeholder: 'Enter Your Password',
            },
            {
                label: 'Username',
                type: 'text',
                name: 'username',
                placeholder: 'Enter Your Username',
            },
            {
                label: 'Mobile No.',
                type: 'tel',
                name: 'mobile',
                placeholder: 'Enter Your Mobile Number',
            },
            {
                label: 'Description',
                type: 'text',
                name: 'description',
                placeholder: 'Enter Your Description',
            }
        ]
        return (
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-md-4 offset-md-4 p-5' style={{backgroundColor: '#f8f9fa'}}>
                        <h2 className='text-center mb-5'>Register</h2>
                        <form className='needs-validation' no-validate='true' onSubmit={(e) => this.handleSubmit(e)}>
                            {inputFields.map((ele, i) => <AuthInputField data={ele} func={this.handleInput} key={i} />)}
                            <button type='submit' className='btn btn-primary mt-3' style={{width: '100%', marginBottom: '30px'}}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return({
        register: (query) => {
            dispatch(registerUser(query))
        }
    })
}

export default connect(null, mapDispatchToProps)(Register);