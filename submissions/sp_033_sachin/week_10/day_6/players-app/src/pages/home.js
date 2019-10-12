import React from 'react';
import Create from "../components/create/create.component";
//router
import { Link, Switch, Route } from "react-router-dom";
import Show from '../components/show/show.component';
import Profile from '../components/profile/profile.component';

const HomePage = ({match}) => {

    // console.log(match)

    return (
        <>        
            <Link to={`${match.path}/create`} > Create </Link>
            <Link to={`${match.path}/show`} > Show </Link>
            <Switch>
                <Route exact path={`${match.path}/create`} component={Create} />
                <Route exact path={`${match.path}/show`} component={Show} />
                <Route path={`${match.path}/show/:id`} component={Profile} />
            </Switch>
        </>
    )
}

export default HomePage;