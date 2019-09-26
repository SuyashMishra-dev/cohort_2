import React from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Contact from './component/Contact';
import Services from './component/Services';
import Login from './component/Login';
import About from './component/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path = "/" component = {Home} />
      <Route path = "/contact" component = {Contact} />
      <Route path = "/about" component = {About} />
      <Route path = "/services" component = {Services} />
      <Route path = "/login" component = {Login} />
    </BrowserRouter>
  );
}

export default App;
