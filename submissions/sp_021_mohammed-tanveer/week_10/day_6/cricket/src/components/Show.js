import React from 'react';
import {connect} from 'react-redux';

function Show(props) {
    console.log(props.playerDetails)

    if(props.playerDetails){
        return(
            <React.Fragment>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Rank</th>
                                        <th scope="col">Player Name</th>
                                        <th scope="col">Country</th>
                                        <th scope="col">T20 Score</th>
                                        <th scope="col">ODI Score</th>
                                        <th scope="col">Test Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{props.playerDetails.playerName}</td>
                                        <td>{props.playerDetails.country}</td>
                                        <td>{props.playerDetails.t20Score}</td>
                                        <td>{props.playerDetails.odiScore}</td>
                                        <td>{props.playerDetails.testScore}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }else{
        return(
            <p>No Please found yet!</p>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        playerDetails: state.players
    }
}

export default connect(mapStateToProps)(Show)