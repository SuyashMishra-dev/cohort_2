import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Services from './Components/Services';
import Login from './Components/Login';

export default class App extends React.Component {
  render() {
      return (
      <BrowserRouter>
        <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-warning">
              <Link className="navbar-brand nav-link active" to="/">Navbar</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-item nav-link" to="/">Home</Link>
                  <Link className="nav-item nav-link" to="/contact">Contact</Link>
                  <Link className="nav-item nav-link" to="/about">About</Link>
                  <Link className="nav-item nav-link" to="/services">Services</Link>
                  <Link className="nav-item nav-link" to="/login">Login</Link>
                </div>
              </div>
            </nav>
            
              <Route path = "/" exact component = {Home} />
              <Route path = "/contact"  component = {Contact} />
              <Route path = "/about"  component = {About} />
              <Route path = "/services"  component = {Services} />
              <Route path = "/login"  component = {Login} />
            </React.Fragment>
    </BrowserRouter>
          
      )
  }
}

