import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Link } from "react-router-dom";
import Contact from './contact'
import Home from './home'
import About from './about'
import Services from './services'
function App() {
  return (
   <div>
     
    <BrowserRouter>
        <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/">Home</Link>
          <Link className="nav-link" to="/contact">Contact</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/services">Services</Link>
          <Link className="nav-link" to="/login">Login</Link>
          </nav>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} /> 

        </React.Fragment>
      </BrowserRouter>
 </div>
  );
}

export default App;
