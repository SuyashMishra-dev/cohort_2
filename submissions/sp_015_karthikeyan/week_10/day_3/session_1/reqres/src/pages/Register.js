import React from 'react';
import { Container, Grid, Input, Button, Header, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registerUser } from '../redux/actions'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        console.log(this.state);
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.register(this.state)
    }

    render() {
        return (
            <Container>
                <Header as='h1'>Register</Header>
                <Grid>
                    <Grid.Column width={6}>
                        <Input 
                            fluid 
                            icon='user' 
                            iconPosition='left' 
                            onChange={(event) => this.handleChange(event)} 
                            value={this.state.email} 
                            name='email'
                        />
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <Input 
                            fluid 
                            icon='key' 
                            iconPosition='left' 
                            onChange={(event) => this.handleChange(event)} 
                            value={this.state.password} 
                            name='password'
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <Button secondary onClick={(e) => this.handleSubmit(e)}>Register</Button>
                    </Grid.Column>
                </Grid>
                {this.props.error ? (
                    <Message error>
                        <Message.Header>Registration Failed</Message.Header>
                        <p>Check your credentials and try again.</p>
                    </Message>
                ) : (<></>)}
                {this.props.token ? (
                    <Message success>
                        <Message.Header>Registration Successful</Message.Header>
                        <p>Token: {this.props.token}</p>
                    </Message>
                ) : (<></>)}
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.registerError,
        token: state.registerToken
    }
}

const mapDispatchToProps = dispatch => {
    return {
        register: (query) => {
            console.log(query)
            dispatch(registerUser(query))
        }
    }
}

export  default connect(mapStateToProps, mapDispatchToProps)(Register);