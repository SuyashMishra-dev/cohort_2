import React from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./Component/Home"
import Contact from "./Component/Contact"
import About from "./Component/About";
import Login from "./Component/Login"
import Service from "./Component/Services"




export default class App extends React.Component {
  render() {
    return (

      <React.Fragment>
        <BrowserRouter>
          <div>

          <Link to = "/Home">Home</Link>
          <br></br>
          <Link to = "/Contact">Contact</Link>
          <br></br>
          <Link to = "/About">About</Link>
          <br></br>
          <Link to = "/Login">About</Link>
          <br></br>
          <Link to = "/Service">Service</Link>
          <br></br>

            

          </div>
          <div>
          <Route path="/Home" exact component={Home} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/About" exact component={About} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Service" exact component={Service} />
          </div>
          

        </BrowserRouter>

      </React.Fragment>
    
    );
  }
}
