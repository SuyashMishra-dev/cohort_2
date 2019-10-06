import React from 'react';

import { connect } from 'react-redux';

const Total = props => {
    console.log('incomplete',props);
    return (
        <div>
            <p>InComplete: {props.inComplete}</p>
        </div>
    )
}

const mapStateToProps = state => {
    console.log('mapState for todo List called',state)
    return ({
        savedItems: state.savedItems,
        inComplete: state.inComplete
    })
}

export default connect(mapStateToProps, null)(Total);