import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mobilelist from './components/mobilelist';
import Contactus from './components/contactus';
import Download from './components/download';
import Joinus from './components/Joinus';
import Settings from './components/settings';
import Login from './components/login';
import Search from './components/search';
import Help from './components/help';
import Home from './components/home';
import Picture from './components/Picture'
function App() {
  return (
    <div>
      <Mobilelist />
      <br></br>
      <div style={{"display":"flex"}}>
      <Joinus /> 
      <Settings/>
      </div>
      <div style={{"display":"flex"}}>
        <Login />
        <Contactus />
      </div>
      <div style={{"display":"flex"}}>
        <Search />
        <Help />
      </div>
      <div style={{"display":"flex"}}>
        <Home />
        <Download />
      </div>
      <Picture />
      
      
      
    </div>
  );
}

export default App;
