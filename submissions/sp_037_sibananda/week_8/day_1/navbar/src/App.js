import React from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./home.js";
import Contact from "./Contact";
import About  from "./About"
import Services from "./Services"
import Login from "./Login"


export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          
          <div>
            <Link to="/Home">Home</Link>
            <br></br>
            <Link to="/Contact">Contact</Link>
            <br></br>
            <Link to="/About">About</Link>
            <br></br>
            <Link to="/Services">Services</Link>
            <br></br>
            <Link to="/Login">Login</Link>

            
          </div>
          <Route path="/Home" exact component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/About" component={About} />
          <Route path="/Services" component={Services} />
          <Route path="/Login" component={Login} />
          
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
