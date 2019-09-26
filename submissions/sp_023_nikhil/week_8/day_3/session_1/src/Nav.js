import React from 'react';
import {Link, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
//import Services from './components/Services/Services';
import Login from './components/Login/Login'

const Nav = () => {
    return (
        <>
            <ul className="nav">
                <li className="nav-item nav-link">
                    <Link to="/home" >Home</Link>
                </li>
                <li className="nav-item nav-link">
                    <Link to="/contact" >Contact</Link>
                </li>
                <li className="nav-item nav-link">
                    <Link to="/about" >About</Link>
                </li>
                {/* <li className="nav-item nav-link">
                    <Link to="/services" >Services</Link>
                </li> */}
                <li className="nav-item nav-link">
                    <Link to="/login" >Login</Link>
                </li>
            </ul>
            <Route path="/home" render={() => <Home />} />
            <Route path="/about" render={() => <About />} />
            <Route path="/contact" render={() => <Contact />} />
            {/* <Route path="/services" render={() => <Services /> } /> */}
            <Route path="/login" render={() => <Login /> } />
        </>
    )
}

export default Nav