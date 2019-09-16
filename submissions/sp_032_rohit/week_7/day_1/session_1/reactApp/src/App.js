import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/a1/List'
import Buttons from './components/a2/Buttons'
import Card from './components/a3/Card'

function App() {
  return (
    <div className="App">
      <List />
      <Buttons />
      <Card />
    </div>
  );
}

export default App;
