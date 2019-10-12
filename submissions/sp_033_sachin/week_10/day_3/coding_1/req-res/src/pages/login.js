import React from 'react';
import { Container, Grid ,TextField, Button} from "@material-ui/core";
import { connect } from "react-redux";
import { login } from "../redux/login/login.actions";

import { withRouter } from "react-router-dom";


class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : ''
        }
    }

    handleChange = (e) => {

        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    handleClick = () => {
        const {login} = this.props;
        const {email,password} = this.state;
        const data = {
            email,password
        }

        login(data);

    }

    render() {
        const {history,loggedIn} = this.props;

        return (
            <>
                <Container maxWidth='sm'>
                    <h1>Login</h1>
                    <Grid container direction='row' justify='space-between' alignItems='center'  >
                        <Grid item xs={6} style={{textAlign:'center'}} >
                            
                            <TextField
                                id="outlined-email-input"
                                label="Email"
                                type="email"
                                name="email"
                                autoComplete="email"
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleChange}
                                value={this.state.email}
                            />
                            
                        </Grid>
                        <Grid item xs={6} style={{textAlign:'center'}}>
                            <TextField
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                name='password'
                                autoComplete="current-password"
                                margin="normal"
                                variant="outlined"
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={this.handleClick} variant="contained" color="primary" fullWidth>Sign Up</Button>
                        </Grid>
                        {
                            loggedIn?(history.push('/user-dashboard')):''
                        }

                    </Grid>
                </Container>
            </>
        )
    }
}

const mapStateToProps = ({login : {isLoading, loggedIn}}) => ({
    isLoading,    
    loggedIn
})

const mapDispatchToProps = dispatch => ({
    login : (data) => dispatch(login(data)),
}) 


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Login));