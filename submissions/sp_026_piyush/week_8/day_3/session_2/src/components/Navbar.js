import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";
import '../App.css'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Services from './Services';


class Navbar extends Component {
  render() {
    return (
        // <React.Fragment>

        //   <Link className="btn btn-primary" to="/">Home</Link>
          
        //   <Link className="btn btn-primary" to="/about">About</Link>

        //   <Link className="btn btn-primary"to="/contact">Contact</Link>

        //   <Link className="btn btn-primary"to="/services">Services</Link>

        //   <Link className="btn btn-primary"to="/login">Login</Link>

        //   <Route path="/" exact component={Home} />

        //   <Route path="/about" component={About} />

        //   <Route path ="/contact" component={Contact} />

        //   <Route path="/services" component={Services} />

        //   <Route path="/login" component={Login} />
          
        // </React.Fragment>
        
        <React.Fragment>

        <nav className="navbar navbar-light bg-light fixed-top">
          <Link to="/"><img src="https://cdn.shopify.com/s/files/1/0173/8828/files/Proper_Logo_280x_2x_240x240_6b887461-1064-47c5-a958-b6e5a5726d97_280x@2x.png?v=1532311943"/></Link>
        </nav>

          <Route path="/" component={Home}></Route>
        </React.Fragment>
    );
  }
}

export default Navbar;