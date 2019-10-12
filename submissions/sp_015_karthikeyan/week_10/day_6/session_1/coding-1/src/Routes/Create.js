import React from 'react';

import { connect } from 'react-redux';

import FormInputField from '../components/FormInputField';
import CountrySelector from '../components/CountrySelector';

import { addPlayer } from '../redux/actions';

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            country: '',
            t20Score: '',
            odiScore: '',
            testScore: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state);
        this.setState({name: '', t20Score: '', odiScore: '', testScore: ''})
        alert('Player Added Successfully');
    }

    render() {
        console.log(this.state);
        let inputsData = [
            {
                label: 'Player Name',
                name: 'name',
                value: this.state.name,
                type: 'text'
            },
            {
                label: 'T20 Score',
                name: 't20Score',
                value: this.state.t20Score,
                type: 'number'
            },
            {
                label: 'ODI Score',
                name: 'odiScore',
                value: this.state.odiScore,
                type: 'number'
            },
            {
                label: 'Test Score',
                name: 'testScore',
                value: this.state.testScore,
                type: 'number'
            }
        ]
        return (
            <div className='container'>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    {inputsData.map(ele => <FormInputField data={ele} func={this.handleChange} key={ele.label} />)}
                    <label>Country</label>
                    <CountrySelector func={this.handleChange} />
                    <button type='submit' className='btn btn-primary my-3'>Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPlayer: (data) => {
            console.log(data);
            dispatch(addPlayer(data))
        }
    }
}

export default connect(null, mapDispatchToProps)(Create);