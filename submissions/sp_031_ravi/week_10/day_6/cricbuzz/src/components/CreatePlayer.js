import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import './../App.css'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing(1),
  },
}));

class CreatePlayer extends React.Component{
    constructor(){
        super()
        this.state ={
            name:"",
            country:"",
            t20:"",
            odi:"",
            test:""
        }
    }

    handleChange = (e) => {
        this.setState({
            name:e.target.value,
            // country:e.target.value,
            // t20:e.target. value,
            // odi:e.target.value,
            // test:e.target.value
        })
      };
      handleClick =(e) => {
    }
      

    render(){
        return(
            <div className="form">
                <Input
                    placeholder="Player Name"
                    onChange={e => {
                        this.handleChange(e);
                      }}
                    value={this.state.name}
                    className={useStyles.input}
                    inputProps={{
                    'aria-label': 'description',
                    id:"margin",
                    }}
                /><br></br>
                <Input
                    placeholder="Country"
                    type="dropdown"
                    onChange={e => {
                        this.handleChange(e);
                      }}
                    value={this.state.country}
                    className={useStyles.input}
                    inputProps={{
                    'aria-label': 'description',
                    id:"margin",
                    }}
                /><br></br>
                <Input
                    placeholder="T20 Score"
                    onChange={e => {
                        this.handleChange(e);
                      }}
                    value={this.state.t20}
                    className={useStyles.input}
                    inputProps={{
                    'aria-label': 'description',
                    id:"margin",
                    }}
                /><br></br>
                <Input
                    placeholder="ODI Score"
                    onChange={e => {
                        this.handleChange(e);
                      }}
                    value={this.state.odi}
                    className={useStyles.input}
                    inputProps={{
                    'aria-label': 'description',
                    id:"margin",
                    }}
                /><br></br>
                <Input
                    placeholder="Test Score"
                    onChange={e => {
                        this.handleChange(e);
                      }}
                    value={this.state.test}
                    className={useStyles.input}
                    inputProps={{
                    'aria-label': 'description',
                    id:"margin",
                    }}
                /><br></br>
                <Button variant="outlined" className={useStyles.button} id="margin" >Submit
                </Button>
            </div>
        )
    }
}

export default CreatePlayer;