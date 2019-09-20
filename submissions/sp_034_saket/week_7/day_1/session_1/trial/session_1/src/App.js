import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button.js'
import Card from './card.js'

function App() {
  return (

    <div>
    <div className="class1">
       <h1>Mobile Operating System</h1>
            <ul>
              <li>Android</li>
              <li>Blackberry</li>
              <li>iPhone</li>
              <li>iPhone</li>
            </ul>
            <h1>Mobile Manufactures</h1>
            <ul>
              <li>Samsung</li>
              <li>HTC</li>
              <li>Micromax</li>
              <li>Apple</li>
            </ul>

      </div>
      <br></br>
      <br></br>
     <div> 
       <Button/>
     </div>
     <div> 
       <Card/>
     </div>
     
            
     </div>
  );
}

export default App;
