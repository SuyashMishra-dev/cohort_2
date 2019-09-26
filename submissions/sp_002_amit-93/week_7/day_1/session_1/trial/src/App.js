import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js'
import Img from './Img'


function App() {
  return (
    <div className="App">
      <div>
      <h1>Mobile Operating System</h1>
      <list/>
      <ul>
        <li>Android</li>
        <li>Blackberry</li>
        <li>iphone</li>
        <li>Window phone</li>
      </ul>
      </div>
      <div>
        <h1> Mobile Manufacturing </h1>
        <ul>
            <li>Samsung</li>
            <li>HTC</li>
            <li>Micromax</li>
            <li>Apple</li>
        </ul>


       </div>
       <div>
         <List/>
        </div>
    </div>
  );
}

export default App;
