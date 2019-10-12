import React from 'react';

import { connect } from 'react-redux';

import Table from '../components/Table';
import Filters from '../components/Filters';

class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log(this.props, 'tab updated');
        return (
            <div className='container'>
                <Filters />
                <Table data={this.props.tableData} width='100%' />

                
            </div>
        )
    }
}

const mapStateToProp = state => {
    return {
        tableData: state.currentItems,
        flag: state.flag
    }
}

export default connect(mapStateToProp)(Show);