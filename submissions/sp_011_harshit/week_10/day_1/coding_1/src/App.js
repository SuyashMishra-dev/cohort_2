import React from 'react';
import logo from './logo.svg';
import './App.css';
import Register from "./component/register"

import {BrowserRouter,Link,Route} from 'react-router-dom'
import Login from './component/login';

function App() {
  return (
    <BrowserRouter >
     <div className="App">
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <div>
            <Route path="/register" exact render={()=><Register />} />
            <Route path="/login"  render={()=><Login />} />
           </div>
    </div>
    
    </BrowserRouter>
   
  );
}

export default App;
