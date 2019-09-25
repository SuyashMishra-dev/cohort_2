import React from "react";
import {Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
const Navbar = () => {
  return(
    <div>
<nav className="nav">
<Link className="nav-item nav-link" to="/">Home</Link> 

<Link className="nav-item nav-link" to="/about">About</Link>

<Link className="nav-item nav-link" to="/contact">Contact</Link>

<Link className="nav-item nav-link" to="/service">Service</Link>

<Link className="nav-item nav-link" to="/login">Log In</Link>
</nav>
    </div>

  )
   ;
};
export default Navbar;