import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Link,Route,BrowserRouter} from "react-router-dom";
import './components/Style.css'
import Home from './components/Home'
import Contact from './components/Contact';
import Faq from './components/Faq';
import About from './components/About';
import Learn from './components/Learn'

export default class App extends React.Component {
  render(){
  return (
    <React.Fragment>
      <BrowserRouter>
        <div className="App">
          <nav class="navbar navbar-expand-lg navbar-dark bg-light">
                <img className = "logo"src = "./silver-apple-logo.png"/>
                <Link clasName="link" to="/home" >Home <span class="sr-only">(current)</span></Link>
                <Link className="link" to ="/about">About Us</Link>
                <Link className="link" to = "/faq">FAQ</Link>
                <Link className="link " to = "/contact">Contact Us</Link>
                <Link className = "link">Add to Cart</Link>
          </nav>
           <Route path = "/" exact component = {Home}></Route>
           <Route path = "/contact" component = {Contact}/>
           <Route path = "/about" component = {About}/>
           <Route path = "/faq" component = {Faq}/>
          
        </div>
      </BrowserRouter>
    </React.Fragment>
    
  );
}
}

