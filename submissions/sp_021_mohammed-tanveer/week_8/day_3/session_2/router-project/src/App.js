import React from 'react';
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Home from './components/Home';
import Fashion from './components/Fashion';
import Women from './components/Women';
import About from './components/About';
import Contact from './components/Contact';
import Cancel from './components/Cancel';
import Men from './components/Men';
import Kids from './components/Kids';
import Current from './components/Current';


export default class App extends React.Component{
  constructor(repos){
    super(repos);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <BrowserRouter>
          <div>
            <Offers />
            <Navbar />
          </div>
            <Route path="/" exact component={Home} />
            <Route path="/fashion" exact component={Fashion} />
            <Route path="/fashion/women" component={Women} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/cancel" component={Cancel} />
            <Route path="/fashion/men" component={Men} />
            <Route path="/fashion/kids" component={Kids} />
            <Route path="/current" component={Current} />
      </BrowserRouter>
      </div>
    )
  }
}