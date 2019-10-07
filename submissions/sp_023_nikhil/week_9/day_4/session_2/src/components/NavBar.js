import React from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './Home'

class NavBar extends React.Component{
    render() {
        return (
            <>
                <button><Link to="/">Home</Link></button>
        <Route exact path="/" render={() => <Home />} />
            </>
        )
    }
}

export default NavBar