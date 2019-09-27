import React, { Component } from 'react';
// import { Route, BrowserRouter, Link } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar';
import TopDeals from './TopDeals';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TopDeals />
        <Navbar />
      </React.Fragment>
    );
  }
}

export default App;