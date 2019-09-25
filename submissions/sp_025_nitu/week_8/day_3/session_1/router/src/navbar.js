import React from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Home from './home.js';
import About from './about.js';
import Contact from './contect.js';
import Login from './login.js';
import Service from './service.js';

function Navbar (){
    return(
        <div>
            <BrowserRouter>
        <React.Fragment>
          <navbar style={{"background":"blue"}}>
          <Link to="/">Home</Link>

          <Link to="/About">About</Link>

          <Link to="/contact">Contact</Link>

          <Link to="/login">Login</Link>

          <Link to="/service">Service</Link>

          <Route path="/" exact component={Home} />

          <Route path="/about" component={About} />

          <Route path="/contact" component={Contact} />

          <Route path="/login" component={Login} />

          <Route path="/service" component={Service} />
         
          </navbar>

        </React.Fragment>
      </BrowserRouter>
        </div>
    )
}
export default Navbar;