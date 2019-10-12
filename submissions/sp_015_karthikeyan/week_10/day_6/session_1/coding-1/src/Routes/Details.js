import React from 'react';
import Axios from 'axios';


class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomFact: ''
        } 
    }

    componentDidMount() {
        let totalScore = Number(this.props.data.t20Score) + Number(this.props.data.odiScore) + Number(this.props.data.testScore);
        Axios.get(`http://numbersapi.com/${totalScore}`)
            .then(resp => this.setState({randomFact: resp.data}));
    }

    render() {
        let total = Number(this.props.data.t20Score) + Number(this.props.data.odiScore) + Number(this.props.data.testScore);
        return (
            <div className='container text-center'>
                <h3 className='text-center m-2 my-5'>Player Details</h3>
                <div className='row'>
                    <div className='col'>
                        <h5 className='text-right'>Name : </h5>
                        <h5 className='text-right'>Country : </h5>
                        <h5 className='text-right'>T20 Score : </h5>
                        <h5 className='text-right'>ODI Score : </h5>
                        <h5 className='text-right'>Test Score : </h5>
                        <h5 className='text-right'>Total Score : </h5>
                        <h5 className='text-right'>Random Fact : </h5>
                    </div>
                    <div className='col'>
                        <h5 className='text-left'>{this.props.data.name}</h5>
                        <h5 className='text-left'>{this.props.data.country}</h5>
                        <h5 className='text-left'>{this.props.data.t20Score}</h5>
                        <h5 className='text-left'>{this.props.data.odiScore}</h5>
                        <h5 className='text-left'>{this.props.data.testScore}</h5>
                        <h5 className='text-left'>{total}</h5>
                        {this.state.randomFact ? (
                            <h5 className='text-left'>{this.state.randomFact}</h5>
                        ) : (
                            <h5 className='text-left'>Getting a random fact for your score</h5>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Details;