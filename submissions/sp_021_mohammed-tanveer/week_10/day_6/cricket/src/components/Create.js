import React from 'react';
import {addPlayerAction} from '../actions/AllActions';
import {connect} from 'react-redux';

let playersStorage = JSON.parse(localStorage.getItem('players'));



class Create extends React.Component{
    constructor(){
        super();
        this.state = {
            playerName: null,
            country: 'India',
            t20Score: null,
            odiScore: null,
            testScore: null,
        }
    }

    inputChange = (playerEntered) => {
        this.setState({[playerEntered.target.name]:playerEntered.target.value})
    }

    inputSubmit = (submit) => {
        submit.preventDefault();
        this.setState({playerName:'',country:'India',t20Score:'',odiScore:'',testScore:''});
        this.props.addingPlayer(this.state)
        // localStorage.setItem('players',JSON.stringify(this.state))
        this.props.history.push('/show')
    }

    render(){
        return(
            <React.Fragment>
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-6">
                            <h3>Add Your Favrioute Player Details</h3>
                        <form onSubmit={this.inputSubmit}>
                            <div class="form-group">
                                <label>Player Name</label>
                                <input type="text" class="form-control" placeholder="Enter Player Name" required name="playerName" value={this.state.playerName} onChange={this.inputChange} />
                            </div>
                            <div class="form-group">
                                <label>Country</label>
                                <select class="form-control" name="country" value={this.state.country} onChange={this.inputChange}>
                                    <option>India</option>
                                    <option>Sri Lanka</option>
                                    <option>Bangladesh</option>
                                    <option>Afghanistan</option>
                                    <option>Australia</option>
                                    <option>South Africa</option>
                                    <option>Australia</option>
                                    <option>England</option>
                                    <option>New Zealand</option>
                                    <option>West Indies</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>T20 Score</label>
                                <input type="number" class="form-control" placeholder="Player T20 Score" required name="t20Score" value={this.state.t20Score} onChange={this.inputChange} />
                            </div>
                            <div class="form-group">
                                <label>ODI Score</label>
                                <input type="number" class="form-control" placeholder="Player ODI Score" required name="odiScore" value={this.state.odiScore} onChange={this.inputChange} />
                            </div>
                            <div class="form-group">
                                <label>Test Score</label>
                                <input type="number" class="form-control" placeholder="Player Test Score" required name="testScore" value={this.state.testScore} onChange={this.inputChange} />
                            </div>
                            <button type="submit" class="btn btn-danger">Add Player Details</button>
                        </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addingPlayer: addedData => dispatch(addPlayerAction(addedData))

    }
}

export default connect(null, mapDispatchToProps)(Create)