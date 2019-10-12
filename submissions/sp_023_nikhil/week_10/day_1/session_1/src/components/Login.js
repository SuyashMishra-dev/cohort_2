import React from 'react'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'

class Login extends React.Component {
    render() {
        return (
            <>
                <div  >
                    <TextField margin="normal" variant="outlined" label="Uername" />
                    <br />
                    <TextField margin="normal" variant="outlined" label="Password" type="password" />
                    <br />
                    <Button variant="outlined" >Click</Button>
                </div>
            </>
        )
    }
}

const style = {
    margin: "marginLift:540px"
}

export default Login