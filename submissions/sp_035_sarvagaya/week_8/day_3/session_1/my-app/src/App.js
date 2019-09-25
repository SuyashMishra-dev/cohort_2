import React from 'react';
import logo from './logo.svg';
// import './App.css';
import {Route} from "react-router-dom";
import {Link} from "react-router-dom";
// import {Route} from "react-router-dom";
// import NavBar from "./component/NavBar";
import Home from "./component/Home";
import Contact from "./component/Contact";
import About from "./component/About";
import Services from "./component/Services";
import Login from "./component/Login";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
        <div>
          <Link to="/">Home</Link>
          <Link to="/About">About Us</Link>
          <Link to="/Contact">Contact Us</Link>
          <Link to="/Services">Our Services</Link>
          <Link to="/Login">Login</Link>
        </div>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Services" component={Services} />
          <Route path="/Login" component={Login} />
        </div>  
        </BrowserRouter>
      
        
      </React.Fragment>
    </div>
  );
}

export default App;
