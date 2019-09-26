import React, { Component } from 'react';
// import { Route, BrowserRouter, Link } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
      </React.Fragment>
    );
  }
}

export default App;