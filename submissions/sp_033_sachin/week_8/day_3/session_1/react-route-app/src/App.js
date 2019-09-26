import React from 'react';
import {Link,NavLink,Route} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home'
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  
  return (
        <React.Fragment>
            {/* <h1> Courses </h1> */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              {/* <a class="navbar-brand" href="#">Navbar</a> */}
              <Link className="navbar navbar-expand-lg navbar-light bg-light" to="/">Home</Link>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
                    <Link className="navbar navbar-expand-lg navbar-light bg-light" to="/contact">Contact</Link>
                  </li>
                  <li class="nav-item">
                  <Link className="navbar navbar-expand-lg navbar-light bg-light" to="/services">Services</Link>
                    {/* <a class="nav-link" href="#">Features</a> */}
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="#">Pricing</a> */}
                    <Link className="navbar navbar-expand-lg navbar-light bg-light" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/faq" className="navbar navbar-expand-lg navbar-light bg-light" activeClassName="">
                      FAQs
                    </NavLink>
                  </li>                 
                </ul>
                <button style={{position:"fixed",right:"20px"}} className="btn my-2 my-sm-0" type="button"><Link className="navbar navbar-expand-lg navbar-light bg-light" to="/login">Login</Link></button>
              </div>
            </nav>
            
            <Route path = "/Login" exact render = {() => <Login /> } />
            
            <Route path = "/contact" exact render = {() => <Contact /> } />
            <Route path = "/services" exact render = {() => <Services /> } />
            <Route path = "/about" exact render = {() => <About /> } />
            <Route path = "/" exact render = {() => <Home /> } /> 

        </React.Fragment>
  );
}

export default App;
