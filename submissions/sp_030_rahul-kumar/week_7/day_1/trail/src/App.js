import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coder from './card'

function App() {
  return (
    <div>
    <div>
    <div>
      <h1>Mobile Operating System</h1>
      <ul>
        <li>Android</li>
        <li>Blackberry</li>
        <li>iPhone</li>
        <li>Windows Phone</li>
      </ul>
    </div>    
       <h1>Mobile Manufacturers</h1>
       <ul>
       <li>Samsung</li>
       <li>HTC</li>
       <li>Micromax</li>
       <li>Apple</li>
       </ul>
    </div>
    
    <div>
    <button className="join">JOIN US</button>
    <button className="setting">SETTINGS</button>
    </div>
    <div>
    <button className="login">LOGIN</button>
    <button className="contact">CONTACT US</button>
    </div>
    <div>
    <button className="search">SEARCH</button>
    <button className="help">HELP</button>
    </div>
    <div>
    <button className="home">HOME</button>
    <button className="download">DOWNLOAD</button>
    <Coder />
    </div>
  </div>


  );
}

export default App;
