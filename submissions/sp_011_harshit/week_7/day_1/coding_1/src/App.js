import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './folderA/list'
import List2 from './folderA/list2' 
import Fcomp from './folderB/funcompts'
import Card from './folderC/card'
function App() {
  return (
    <div>
      <List />
      <List2 />
      <Fcomp />
      <Card />
    </div>
  );
}


export default App;
