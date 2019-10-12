import React from 'react';

import { connect } from 'react-redux';
import { filterByCountry, sort } from '../redux/actions'

import CountrySelector from './CountrySelector';

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedType: ''
        }
    }

    handleChange = (e) => {
        this.props.filter(e.target.value)
    }

    handleTypeSelector = (e) => {
        this.setState({selectedType: e.target.value})
    }

    handleOrderSelector = (e) => {
        this.props.sort(this.state.selectedType, e.target.value)
    }

    render() {
        console.log(this.state);
        return (
            <div className='d-flex justify-content-end'>
                <div className='my-4 mx-1'>
                    <label>Filter By Country:</label>
                    <CountrySelector func={this.handleChange}/>
                </div>
                <div className='my-4 mx-1'>
                    <label>Sort By Score:</label>
                    <select className='custom-select' onChange={(e) => this.handleTypeSelector(e)}>
                        <option>Select...</option>
                        <option value='t20Score'>T20 Score</option>
                        <option value='odiScore'>ODI Score</option>
                        <option value='testScore'>Test Score</option>
                    </select>
                </div>
                <div className='my-4 mx-1'>
                    <label>Sort Order:</label>
                    <select className='custom-select' onChange={(e) => this.handleOrderSelector(e)}>
                        <option>Select...</option>
                        <option value='Ascending'>Ascending</option>
                        <option value='Descending'>Descending</option>
                    </select>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        filter: (country) => {
            console.log('filter applied');
            dispatch(filterByCountry(country))
        },
        sort: (sortType, sortOrder) => {
            console.log('sort Applied');
            dispatch(sort(sortType, sortOrder))
        }
    }
}

export default connect(null, mapDispatchToProps)(Filters);