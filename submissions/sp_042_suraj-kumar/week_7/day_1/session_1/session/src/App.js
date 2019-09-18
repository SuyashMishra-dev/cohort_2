import React from 'react';
import './App.css';
import './button.css';
import Button from './button.js'
import Image from './card.js'

function App() {
  return (
    <div>
      <h1>Mobile Operating System</h1>
      <ul>
        <li>Android</li>
        <li>IPhone</li>
        <li>BlackBerry</li>
        <li>Window Phone</li>
      </ul>

      <h1>Mobile Manufacturers</h1>
      <ul>
        <li>Samsung</li>
        <li>HTC</li>
        <li>Micromax</li>
        <li>Apple</li>
      </ul>

      <div>
        < Button />
      </div>
      <div>
        <Image />
      </div>

    </div>
  );
}

export default App;
