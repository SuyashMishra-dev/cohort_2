import React from 'react';
import {addPlayerAction} from '../actions/Allactions';
import {connect} from 'react-redux';

class Create extends React.Component{
    constructor(){
        super();
        this.state = {
            Name: '',
            country: 'India',
            t20: '',
            odi: '',
            test: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let data = ({Name:this.state.Name, country: this.state.country,t20:this.state.t20,
                    odi:this.state.odi, test: this.state.test })
        this.setState({Name:'', country:'India', t20:'', odi:'', test: ''})
        this.props.addingPlayer(data);
    
    }

    render(){
        return(
            <React.Fragment>
                <div class="container mt-3">
                    <div class="row">
                        <div class="col-12">
                            <h3>Add Your Favourite Cricket Player Details</h3>
                            <form onSubmit={this.handleSubmit}>
                                <div class="form-group">
                                    <label>Player Name</label>
                                    <input type="text" class="form-control" placeholder="Enter The Name" name="Name" value={this.state.Name} onChange={this.handleChange} />
                                </div>
                                <div class="form-group">
                                    <label>Country</label>
                                    <select class="form-control" name="country" value={this.state.country} onChange={this.handleChange}>
                                        <option value="India">India</option>
                                        <option value="Australia">Australia</option>
                                        <option value="England">England</option>
                                        <option value="New zealand">News Zealand</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="West indies">West Indies</option>
                                        <option value="Bangaladesh">Bangladesh</option>
                                        <option value="UAE">UAE</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>T20 Score</label>
                                    <input type="number" class="form-control" placeholder="Enter T20 Score" name="t20" value={this.state.t20} onChange={this.handleChange} />
                                </div>
                                <div class="form-group">
                                    <label>ODI Score</label>
                                    <input type="number" class="form-control" placeholder="Enter ODI Score" name="odi" value={this.state.odi} onChange={this.handleChange} />
                                </div>
                                <div class="form-group">
                                    <label>Test Score</label>
                                    <input type="number" class="form-control" placeholder="Enter Test Score" name="test" value={this.state.test} onChange={this.handleChange} />
                                </div>
                                <button type="submit" class="btn btn-dark">Add Player Details</button>
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