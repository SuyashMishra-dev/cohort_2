import React from 'react';
import logo from './logo.svg';
import ListOne from './components/A1/ListOne';
import ListTwo from './components/A1/ListTwo';
import Buttons from './components/A2/Buttons';
import Card from './components/A3/Card';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <ListOne />
      <ListTwo />
      <Buttons />
      <Card />
    </div>
  );
}

export default App;
