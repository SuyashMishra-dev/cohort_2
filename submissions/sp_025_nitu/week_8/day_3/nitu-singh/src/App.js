import React from "react";
import "./App.css";
import Navbar from './Component/navbar';
import Home from './Component/Home';
import Shopnow from './Component/Shopnow';
import About from './Component/about.js';
import FAQ from './Component/faq.js';
import Wholesale from './Component/Wholesale';
import {BrowserRouter, Route} from 'react-router-dom'
import Login from "./Component/login";

class App extends React.Component {
  render() {
    return (
      
      <div>
    <BrowserRouter>
        
        <Navbar />

        <Route path="/" exact component={Home} />

        <Route path="/Shopnow"  component={Shopnow} />

        <Route path="/About"  component={About} />

        <Route  path="/FAQ"  component={FAQ} />

        <Route  path="/Wholesale"  component={Wholesale} />

        <Route  path="/Login"  component={Login} />

     </BrowserRouter>
      </div>
    );
  }
}

export default App;
