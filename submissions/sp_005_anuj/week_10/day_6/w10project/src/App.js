import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './component/navbar';
import Routes from './component/routes';

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
