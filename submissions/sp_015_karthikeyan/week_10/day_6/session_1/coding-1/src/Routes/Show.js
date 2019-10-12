import React from 'react';

import { connect } from 'react-redux';

import Table from '../components/Table';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';

class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log(this.props, 'tab updated');
        let completeData = this.props.tableData;
        let length = completeData.length;
        let tableData;
        let id = this.props.match.params.id;
        if(id === '0') {
            tableData = completeData.slice(0, 5);
        }
        else tableData = completeData.slice((5*Number(id)),5*(Number(id)+1))

        console.log(id);
        return (
            <div className='container'>
                <Filters />
                <Table data={tableData} width='100%' />
                <Pagination id={id} length={length} />
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