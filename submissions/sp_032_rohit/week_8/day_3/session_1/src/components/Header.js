import React from 'react';
import {Link} from "react-router-dom";

export default class Header extends React.Component {
  render(){
    return (
      <div className="bg-light row border-bottom">
        <div className="col-md-1">
        </div>
        <img src="https://zerodha.com/static/images/logo.svg" height="20px"  className="d-inline-block align-top mt-3" alt="Zerodha" />
        <div className="col-md-6">
        </div>
        <nav class="navbar navbar-expand-lg">
          <Link to="/" className="navbar-brand">Home</Link>
          <Link to="/about" className="navbar-brand">About</Link>
          <Link to="/contact" className="navbar-brand">Contact</Link>
          <Link to="/services" className="navbar-brand">Services</Link>
          <Link to="/login" className="navbar-brand">Login</Link>
        </nav>
      </div>
    )
  }
}
