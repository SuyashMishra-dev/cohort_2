import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  return (

    <Router>
      <div className="App">
        <div className="row">
          <div className="col-xl-3 bg-dark">
            <Link to="/">Home</Link>
          </div>
          <div className="col-xl-3">
            <Link to="/about">About</Link>
          </div>
          <div className="col-xl-3">
            <Link to="/contact">Contact</Link>
          </div>

        </div>
      </div>
      <div >

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>


    </Router>


  );
}

export default App;
