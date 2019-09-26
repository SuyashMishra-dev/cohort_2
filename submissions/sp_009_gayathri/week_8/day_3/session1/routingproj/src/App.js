import React from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import Homepage from "./component/Homepage.js";
import AboutUs from "./component/AboutUs.js";
import ContactUs from "./component/ContactUs.js";
import Services from "./component/Services.js";
import Login from "./component/Login.js";


export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>

        <BrowserRouter>
          <h1> Zerodha Online Trading</h1>
          <div>
            <Link to="/">Homepage</Link>
            <br />
            <Link to="/login">Login</Link>
            <br />
            <Link to="/about">AboutUs</Link>
            <br />
            <Link to="/contact">ContactUs</Link>
            <br />
            <Link to="/service">Services</Link>
            <br />
           

          </div>
          <Route path="/" exact component={Homepage}/>
          <Route path="/login" component={Login}/>
          <Route path="/about" component={AboutUs}/> 
          <Route path="/contact" component={ContactUs}/>
           <Route path="/service" component={Services}/>

          
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

