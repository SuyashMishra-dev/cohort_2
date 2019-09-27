import React, {Component} from 'react';
import { Route, Link } from "react-router-dom";
import '../App.css'
import Home from './Home';
import About from './About';
import FAQ from './FAQ';
import Contact from './Contact';
import Products from './products/Products';

class Navbar extends Component {
  render() {
    return (
        <React.Fragment>
                  
          <nav className="navbar navbar-light bg-light fixed-top">

          {/* Links */}
            <Link to="/"><img src="https://cdn.shopify.com/s/files/1/0173/8828/files/Proper_Logo_280x_2x_240x240_6b887461-1064-47c5-a958-b6e5a5726d97_280x@2x.png?v=1532311943"/></Link>

            <Link className="nav-link" to="/products">Products</Link>
            <Link className="nav-link" to="/FAQ">FAQ's</Link>
            <Link className="nav-link" to="/about">About Us</Link>
            <Link className="nav-link" to="/contact">Contact Us</Link>

            
            <Link to="#"><img src="https://www.pinclipart.com/picdir/middle/403-4035278_png-file-svg-shopping-cart-icon-png-clipart.png" style={{height: '50px'}} /></Link>
          </nav>
          {/* End of Links */}

          {/* Routes */}
            <Route path="/" exact component={Home}></Route>
            <Route path="/products" component={Products}></Route>
            <Route path="/FAQ" component={FAQ}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>

          {/* End of Routes */}

        </React.Fragment>
    );
  }
}

export default Navbar;