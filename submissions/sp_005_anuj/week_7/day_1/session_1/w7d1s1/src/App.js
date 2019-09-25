import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './a1.js';
import Button from './a2.js';
import Layout from './a3.js'

function App() {
  return (
    <div>
      <div>
        <List/>
      </div>

      <div>
        <Button/>
      </div>

      <div>
        <Layout/>
      </div>

    </div>
  );
}

export default App;