import React from 'react';
import { connect } from 'react-redux';
import { createPlayer } from './actions';

var playerInfo = {};

class PlayerForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name:"",
            country:"",
            t20Score:0,
            odiScore:0,
            testScore:0
        }
        // console.log(this.props.player)
    }
    handleName(key, value) {
        this.setState({
            [key]: value
        })
        // console.log(this.state.name)
    }
    handleCountry(key, value) {
        this.setState({
            [key]: value
        })
        // console.log(this.state.country)
    }
    handleT20Score(key, value) {
        this.setState({
            [key]:value
        })
        // console.log(this.state.t20Score)
    }
    handleODIScore(key, value) {
        this.setState({
            [key]:value
        })
        // console.log(this.state.odiScore)
    }
    handleTestScore(key, value) {
        this.setState({
            [key]:value
        })
        // console.log(this.state.testScore)
    }
    handleSubmit(event) {
        event.preventDefault();
        playerInfo = {
            name: this.state.name,
            country: this.state.country,
            t20Score: this.state.t20Score,
            odiScore: this.state.odiScore,
            testScore: this.state.testScore
        }
        this.props.create(playerInfo);
        // console.log(playerInfo)
        alert("PLAYER CREATED,CLICK SHOW TO SEE...");
    }

    render() {
        return(
            <div className="text-center">
                <div>
                    <img src = "https://media.istockphoto.com/photos/cricket-cricket-stadium-picture-id641189676?k=6&m=641189676&s=612x612&w=0&h=AaVySBB6A3ck7aYPXJohLXgUVPHoXBbPSszQsvbsOk0=" alt="Profile Background" height="660" width="100%"/>
                </div>
                <div style={{marginTop:"-600px", fontSize:"20px", fontWeight:"bolder", color:"white"}}>
                    <form onSubmit = {(event) => this.handleSubmit(event)}>
                        <label>Player Name</label>
                        <br/>
                        <input 
                            type="text"
                            placeholder="Enter Name"
                            required
                            onChange={(e) => this.handleName("name", e.target.value)} 
                        />
                        <br/>
                        <br/>
                        <label>Country</label>
                        <select
                            required
                            onClick={(e) => this.handleCountry("country", e.target.value)}
                        >
                            <option>England</option>
                            <option>India</option>
                            <option>New Zealand</option>
                            <option>Australia</option>
                            <option>South Africa</option>
                            <option>Pakistan</option>
                            <option>Bangladesh</option>
                            <option>Sri Lanka</option>
                            <option>West Indies</option>
                            <option>Afghanistan</option>
                        </select>
                        <br/>
                        <br/>
                        <label>T20 Score</label>
                        <br/>
                        <input 
                            type="number"
                            placeholder="Enter T20 Score"
                            required
                            onChange={(e) => this.handleT20Score("t20Score", e.target.value)}
                        />
                        <br/>
                        <br/>
                        <label>ODI Score</label>
                        <br/>
                        <input 
                            type="number"
                            placeholder="Enter ODI Score"
                            required
                            onChange={(e) => this.handleODIScore("odiScore", e.target.value)}
                        />
                        <br/>
                        <br/>
                        <label>Test Score</label>
                        <br/>
                        <input 
                            type="number"
                            placeholder="Enter Test Score"
                            required
                            onChange={(e) => this.handleTestScore("testScore", e.target.value)}
                        />
                        <br/>
                        <br/>
                        <input type="submit" value="Create Player" />
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        player: state.playersList
    };
};

const mapDispatchToProps = dispatch => {
    return {
        create: (info) => dispatch(createPlayer(info))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlayerForm);