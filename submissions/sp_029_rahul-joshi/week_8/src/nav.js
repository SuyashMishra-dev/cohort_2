import React from 'react';
import {Route, BrowserRouter, Link } from "react-router-dom";
import Home from './home'
import Contact from './contact'
import About from './about'
import Services from './services'
import Login from './login'













   class Nav extends React.Component{
       render(){

        return (
        

              
            <BrowserRouter>
            <React.Fragment>
              
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/contact">Contact</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/services">Services</Link>
                            <Link className="nav-link" to="/login">Login</Link>
            
                           
            </nav>

            <Route path="/" exact component={Home}/>
                            <Route path="/contact" component={Contact}/>
                            <Route path="/about" component={About}/>
                            <Route path="/services" component={Services}/>
                            <Route path="/login" component={Login}/>

                
            </React.Fragment>
            </BrowserRouter>

        
            
            
           )

       }
      
   }


           

                       
                      

                    


            



export default Nav