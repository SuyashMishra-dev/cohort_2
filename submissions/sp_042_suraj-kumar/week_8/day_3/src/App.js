import React from 'react';

import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Home from './component/session_1/Home';
import Contact from './component/session_1/Contact'
import About from './component/session_1/About';
import Services from './component/session_1/Services';
import Login from './component/session_1/Login';

function App() {
  return (
    <BrowserRouter>
       <React.Fragment>
      <div>
        <nav>
          
          
              <Link to="/">Home</Link>
          
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Services</Link>
          <Link to="/login">Login</Link>
        
        </nav>
        <Route path="/" exact component={Home} />

<Route path="/about" component={About} />

<Route path="/contact" component={Contact} />
<Route path="/service" component={Services} />
<Route path="/login" component={Login} />
        
        
      </div>
      </React.Fragment>
      </BrowserRouter>
  );
}

export default App;
