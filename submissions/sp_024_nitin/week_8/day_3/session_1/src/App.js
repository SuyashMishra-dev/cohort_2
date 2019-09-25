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
          <Link to = "/">Home</Link>
          <Link to = "/contact">Contact</Link>
          <Link to = "/about">About</Link>
          <Link to = "/services">Services</Link>
          <Link to = "/login">Login</Link>
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

