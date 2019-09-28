import React from 'react';
import { Route, Link, BrowserRouter } from "react-router-dom";
import Main from "./Component/Main";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Login from "./Component/Login";
import Services from "./Component/Services";


export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>


          <nav class="navbar navbar-expand-lg navbar-light bg-light row">

            <img width="150px" height="30px" src="https://zerodha.com/static/images/logo.svg"></img>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className=" col-md-7"></div>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ">
                <Link to="/main" class="nav-item nav-link active" >Home <span class="sr-only">(current)</span></Link>
                <Link to="/contact" class="nav-item nav-link active" >Contact</Link>
                <Link to="/about" class="nav-item nav-link active" >About</Link>
                <Link to="/services" class="nav-item nav-link active" >Services</Link>
                <Link to="/login" class="nav-item nav-link active" >Login</Link>

              </div>
            </div>
          </nav>

          <Route path="/main" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
          <Route path="/login" component={Login} />

          <Main />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

