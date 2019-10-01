import React from 'react';
import { Route, Link, BrowserRouter } from "react-router-dom";
import Main from "./Component/Main";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Login from "./Component/Login";
import Services from "./Component/Services";
import Fotter from "./Component/Fotter";


export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark row">

          <img width="70px" height="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Apple_logo_grey.svg/1200px-Apple_logo_grey.svg.png" />
            
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class=" d-flex justify-content-around navbar-nav col-md-8">
              <Link to="/main" class="nav-item nav-link active ml-5 mr-5" >Apple <span class="sr-only">(current)</span></Link>

              <Link to="/home" class="nav-item nav-link active ml-5 mr-5" >Mac <span class="sr-only">(current)</span></Link>
              {/* <Link to="/main" class="nav-item nav-link active mr-5" >iPad </Link> */}
                {/* <Link to="/main" class="nav-item nav-link active mr-5" >Home <span class="sr-only">(current)</span></Link> */}
                <Link to="/contact" class="nav-item nav-link active mr-5" >Contact</Link>
                <Link to="/about" class="nav-item nav-link active mr-5" >About</Link>
                <Link to="/services" class="nav-item nav-link active mr-5" >Services</Link>
                <Link to="/login" class="nav-item nav-link active mr-5" >Login</Link>

              </div>
            </div>
          </nav>

          <Route path="/home" exact component={Home} />
          <Route path="/main" component={Main} />

          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
          <Route path="/login" component={Login} />
          <Fotter />      
          
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
