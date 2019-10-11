import React from 'react';

import { connect } from 'react-redux';

const History = (props) => {
    return (
        <div id='history'>
            <h1>History</h1>
            <ol>
            {props.history.map(ele => <li><h3>{ele}</h3></li>)}
            </ol>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        history: state.history
    }
}

export default connect(mapStateToProps)(History)