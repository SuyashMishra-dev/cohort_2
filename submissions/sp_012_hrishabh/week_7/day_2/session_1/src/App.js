import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list.js';
import Button from './button.js';
import Card from './card.js';
// const lableArr = ["JOIN US", "SETTINGS", "LOGIN", "CONTACT US", "SEARCH", "HELP", "HOME", "DOWNLOAD"]; 

function App() {
  return (
    <div>
      <List />
      <Button />
      <Card />    
      
    </div>
  );
}

export default App;
