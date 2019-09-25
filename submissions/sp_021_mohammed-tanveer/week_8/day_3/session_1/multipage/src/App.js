import React from "react";
import { Route, Link, BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Login from './Components/Login';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      navLinks : [{name: 'Home', link: '/'},
                  {name: 'About Us', link: '/about'},
                  {name: 'Our Services', link: '/services'},
                  {name: 'Contact Us', link: '/contact'},
                  {name: 'Login', link: '/login'},],
    }
  }

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <Navbar sendNav={this.state.navLinks} />
          </div>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/services" exact component={Services} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} />

        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;