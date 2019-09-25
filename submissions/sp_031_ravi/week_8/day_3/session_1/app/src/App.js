import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import Service from './components/Services';
import About from './components/About'
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/about" exact component={About}/>
        <Route path="/services" component={Service}/>
        <Route path="/login" exact component={Login}/>
  
      </div>
    </Router>
  );
}

export default App;