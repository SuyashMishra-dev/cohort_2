import React from "react";
import { Container, Grid ,TextField, Button} from "@material-ui/core";
import { connect } from "react-redux";
import { register } from "../redux/register/register.actions";

import { withRouter } from "react-router-dom";
class RegisterPage extends React.Component {

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
        const {register} = this.props;
        const {email,password} = this.state;
        const data = {
            email,password
        }

        register(data);

    }

    render () {
        const {history,loggedIn} = this.props;
        

        return (
            <>
                <Container maxWidth='sm'>
                    <h1>Register</h1>
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

const mapStateToProps = ({register : {isLoading, responseData, error},login : {loggedIn}}) => ({
    isLoading,
    responseData,
    error,
    loggedIn
})

const mapDispatchToProps = dispatch => ({
    register : (data) => dispatch(register(data)),
}) 

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RegisterPage));