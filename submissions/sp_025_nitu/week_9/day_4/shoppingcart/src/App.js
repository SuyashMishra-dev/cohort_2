import React from 'react';
import './App.css';
import Shopcart from "./Shopcart.js"
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './navbar';

function App() {
  return (
    <div className="backgroundImage">
     
    <div >
         <BrowserRouter>
      <Navbar />
      </BrowserRouter>
    
      <Shopcart />
    </div>
    </div>
  );
}

export default App;
