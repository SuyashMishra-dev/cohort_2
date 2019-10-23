import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Routes from './components/Routes';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
