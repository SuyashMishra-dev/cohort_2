import React from 'react';
import { Route, Link, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Home from './components/Home';

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
      </BrowserRouter>
      </div>
    )
  }
}