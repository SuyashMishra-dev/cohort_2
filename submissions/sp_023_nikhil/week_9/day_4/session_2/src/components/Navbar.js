import React from 'react'
import { Link, Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Categories
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" href="">Action</Link>
                                    <Link className="dropdown-item" href="">Another action</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" href="">Something else here</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Route exact path="/" render={() => <Home />} />
                <Route path="/login" render={() => <Login />} />
            </React.Fragment>
        )
    }
}

export default Navbar