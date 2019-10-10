import React from 'react';
import { Container, Grid, Input, Button, Header, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { loginUser, logout } from '../redux/actions'

class Login extends React.Component {
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
        this.props.login(this.state)
    }

    handleLogout = (event) => {
        event.preventDefault();
        this.props.logout()
    }

    render() {
       let autoLogout = setTimeout(() => {
            this.props.logout();
        }, 10000)

        if(!this.props.token) {
            clearTimeout(autoLogout);
        }
        
        return (
            <Container>
                {!this.props.token ? (
                    <>
                    <Header as='h1'>Login</Header>
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
                                type='password'
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Button secondary onClick={(e) => this.handleSubmit(e)}>Login</Button>
                        </Grid.Column>
                    </Grid>
                    </>
                ) : (<></>)}
                {this.props.error ? (
                    <Message error>
                        <Message.Header>Login Failed</Message.Header>
                        <p>Check your credentials and try again.</p>
                    </Message>
                ) : (<></>)}
                {this.props.token ? (
                    <>
                        <Message
                            success
                            header='Login Successful'
                            list={[
                              `Token: ${this.props.token}`,
                              'You will be logged out automatically after 10 seconds',
                            ]}
                        />
                        <Button secondary onClick={(e) => this.handleLogout(e)}>Logout</Button>
                    </>
                ) : (<></>)}
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.loginError,
        token: state.loginToken
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (query) => {
            console.log(query)
            dispatch(loginUser(query))
        },
        logout: () => {
            dispatch(logout());
        }
    }
}

export  default connect(mapStateToProps, mapDispatchToProps)(Login);