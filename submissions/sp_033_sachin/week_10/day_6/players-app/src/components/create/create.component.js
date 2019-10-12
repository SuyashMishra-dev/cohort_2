import React from 'react';

//material
import { TextField,FormControl, InputLabel, Select, Button } from "@material-ui/core";
//redux
import { connect } from "react-redux";
import { addAndStore } from "../../redux/players/players.actions";

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {            
            name : '',
            country : '',
            odi_score : 0,
            test_score : 0,
            t20_score : 0,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {totalPlayers,addAndStore} = this.props;
        const {name,country,odi_score,test_score,t20_score} = this.state;
        const data = {
            name,country,odi_score,test_score,t20_score,
            id : totalPlayers + 1
        }   

        addAndStore(data);
        this.setState({
            name : '',
            country : '',
            odi_score : 0,
            test_score : 0,
            t20_score : 0,
        })
    }

    handleChange = (e) => {
        let {name, value} = e.target;
        
        (name=='odi_score')||(name=='t20_score')||(name=='test_score')?value=parseInt(value):value=value;
        this.setState({
            [name] : value
        })
    }

    
    
    render () {
        const {name,country,odi_score,test_score,t20_score} = this.state
        const {countries} = this.props;
        return (
            <div style={{display:'flex',flexWrap:'wrap'}}>
                <form onSubmit={this.handleSubmit} autoComplete="off">
                <FormControl variant="outlined" style={{width:'100%'}}>
                <TextField
                    id="outlined-name"
                    label="Name"
                    
                    value={name}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    name='name'                    
                />
                </FormControl>
                <div>
                <FormControl variant="outlined" style={{width:'100%'}}>
                    <InputLabel htmlFor="outlined-age-native-simple">
                    Country
                    </InputLabel>
                    <Select       
                    native             
                    value={country}
                    onChange={this.handleChange}
                    inputProps={{
                        name: 'country',
                        
                    }}
                    >
                    <option value="" />
                    {
                        countries.map(country=>(<option value={country}>{country}</option>))
                    }
                    </Select>
                </FormControl>
                </div>
                <FormControl variant="outlined" style={{width:'50%'}}>
                <TextField
                    id="outlined-number"
                    label="ODI Score"
                    value={odi_score}
                    onChange={this.handleChange}
                    type="number"
                    
                    InputLabelProps={{
                    shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                    name='odi_score'
                />
                </FormControl>
                <FormControl variant="outlined" style={{width:'50%'}}>
                <TextField
                    id="outlined-number"
                    label="Test Score"
                    value={test_score}
                    onChange={this.handleChange}
                    type="number"
                    
                    InputLabelProps={{
                    shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                    name='test_score'
                />
                </FormControl>
                <FormControl variant="outlined" style={{width:'50%',textAlign:'center'}}>
                <TextField
                    id="outlined-number"
                    label="T20 Score"
                    value={t20_score}
                    onChange={this.handleChange}
                    type="number"
                    
                    InputLabelProps={{
                    shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                    name='t20_score'
                />
                </FormControl>

                <Button type='submit' variant="contained" color="primary" style={{width:'100%'}}>
                    Submit
                </Button>
                </form>
            
            </div>
        )
    }

}

const mapStateToProps = ({countries : {countries},players : {total}}) => ({
    countries,
    totalPlayers : total
})

const mapDispatchToProps = dispatch =>({
    addAndStore : (player) => dispatch(addAndStore(player))
})

export default connect(mapStateToProps,mapDispatchToProps)(Create);