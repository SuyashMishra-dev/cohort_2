import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Services from './components/Services';


class Navbar extends Component {
  render() {
    return (
      // <BrowserRouter>
        <React.Fragment>

          <Link className="btn btn-primary" to="/">Home</Link>
          
          <Link className="btn btn-primary" to="/about">About</Link>

          <Link className="btn btn-primary"to="/contact">Contact</Link>

          <Link className="btn btn-primary"to="/services">Services</Link>

          <Link className="btn btn-primary"to="/login">Login</Link>

          <Route path="/" exact component={Home} />

          <Route path="/about" component={About} />

          <Route path ="/contact" component={Contact} />

          <Route path="/services" component={Services} />

          <Route path="/login" component={Login} />
          
        </React.Fragment>
      // </BrowserRouter>
    );
  }
}

export default Navbar;