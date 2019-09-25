import React from 'react';
import './App.css';
import {BrowserRouter, Route,Link} from 'react-router-dom';
import About from './About';
import Service from './Service';
import Login from './Login';
import Contact from './Contact';
import Home from './Home';



 class App extends React.Component {
  render(){
      return (
      <BrowserRouter>
        <React.Fragment>
          <Link to="/" className="margin">Home</Link>
          <Link to="/about" className="margin">About</Link>
          <Link to="/contact" className="margin">Contact</Link>
          <Link to="/service" className="margin">Service</Link>
          <Link to="/login" className="margin">Login</Link>
          <Route path = "/" className="margin" exact component = {Home} />
          <Route path = "/about" className="margin"component = {About} />
          <Route path = "/contact"className="margin" component = {Contact} />
          <Route path ="/service" className="margin" component = {Service}/>
          <Route path = "/login" className="margin"component ={Login}/>
         </React.Fragment>
        </BrowserRouter>
      );
  }
} 

export default App;