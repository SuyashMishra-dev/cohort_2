import React from 'react';
import logo from './logo.svg';
import './App.css';
import JoinUs from './joinUs.js'
import Settings from './setting.js'
import Login from './login.js'
import ContactUs from './contactUs.js';
import Search from './search.js';
import Home from './home.js';
import Download from './download.js';
import Help from './help.js';
import Card from './card.js';

function App() {

  return (
    <div>
       <h1>
        Mobile Operating System
       </h1>
       <div>
       <ul>
         <li>Android</li>
         <li>Blackberry</li>
         <li>iPhone</li>
         <li>Windows Phone</li>
       </ul>
       </div>
       <h1>
        Mobile Manufacturers
       </h1>
       <div>
       <ul>
         <li>Samsung</li>
         <li>Blackberry</li>
         <li>Micromax</li>
         <li>Apple</li>
       </ul>
       </div>
       <div className="flex">
         <JoinUs/>
         <Settings/>
       </div>
       <div className="flex">
         <Login/>
         <ContactUs/>
       </div>
       <div className="flex">
         <Help/>
         <Home/>
       </div>
       <div className="flex">
         <Download/>
         <Search/>
       </div>
       <div>
        <Card/>
       </div>
    </div>

  );
}

export default App;
