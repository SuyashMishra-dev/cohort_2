import React from 'react';

import { connect } from 'react-redux';

const UserPage = (props) => {
    return (
        <div className='container'>
            <div className='row'>
                <p className='col text-right'>Name: </p>
                <p className='col'>{props.user.name}</p>
            </div>
            <div className='row'>
                <p className='col text-right'>username: </p>
                <p className='col'>{props.user.username}</p>
            </div>
            <div className='row'>
                <p className='col text-right'>email: </p>
                <p className='col'>{props.user.email}</p>
            </div>
            <div className='row'>
                <p className='col text-right'>mobile: </p>
                <p className='col'>{props.user.mobile}</p>
            </div>
            <div className='row'>
                <p className='col text-right'>description: </p>
                <p className='col'>{props.user.description}</p>
            </div>
            <div className='row'>
                <p className='col text-right'>token: </p>
                <p className='col'>{props.user.token}</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return({
        user: state.userInfo
    })
}

export default connect(mapStateToProps, null)(UserPage);