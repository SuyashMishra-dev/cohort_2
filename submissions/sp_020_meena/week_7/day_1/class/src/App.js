import React from 'react';
import logo from './logo.svg';
import './App.css';
import List1 from './List1';
import List2 from './List2';
import Button from './button.js';
import Box from './img.js';
///import Image from './img.js';

function App() {
  return (
    <div className="App">
      <div> 
       <List1/>
      </div>
      <div>
        <List2/>
      </div>
      <div>
       <Button/>
      </div>
       <div>
         <Box/>
       </div> 
    </div>
    
  );
}

export default App;
