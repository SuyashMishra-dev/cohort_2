import React from 'react';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from './components/NavBar';

import Create from './Routes/Create';
import Show from './Routes/Show';
import Details from './Routes/Details';

const App = (props) => {
    return (
        <>
            <NavBar />
            <Route path='/' exact component={Create} />
            <Route path='/showplayers/:id' render={props => <Show {...props} />} />
            <Route path='/details/:id' render={(routerProps) => {
                let temp = props.details.filter(ele => ele.name === routerProps.match.params.id);
                console.log(temp);
                return <Details data={temp[0]} />
            }} />

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        details: state.playerDetails
    }
}

export default connect(mapStateToProps)(App);