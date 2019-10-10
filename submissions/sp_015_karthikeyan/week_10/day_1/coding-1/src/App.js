import React from 'react';

import { Link, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import Register from './pages/Register';
import Login from './pages/Login';
import UserPage from './pages/UserPage';

const App = (props) => {
    return (
        <div className='container'>
            <div className='row'>
                <Link className='btn btn-primary m-5 col' to='/register'>Register</Link>
                <Link className='btn btn-primary m-5 col' to='/'>LogIn</Link>
            </div>
            <Route path='/register' component={Register} />
            <Route path='/' exact component={Login} />
            {props.username ? (
                <Route path={`/user/${props.username}`} component={UserPage} />
                ) : (
                <></>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        username: state.username
    })
}

export default connect(mapStateToProps, null)(App);