import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Home from './component/home.js';
import About from './component/about.js';
import Contact from './component/contact.js';
import Service from './component/service.js'
import Login from './component/login.js';

function App() {
  return (
    <div>
      <div>

        <React.Fragment>
          
          <div>
            <Link to="/">Home</Link><br />
            <Link to="/about">About</Link><br />
            <Link to="/contact">Contact</Link><br />
            <Link to="/service">Service</Link><br />
            <Link to="/login">Login</Link><br />
            <Link to="/service">Service</Link><br />

          </div>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/service" component={Service} />
          <Route path="/login" component={Login} />

        </React.Fragment>
      </div>  
    </div>
  );
}

export default App;
