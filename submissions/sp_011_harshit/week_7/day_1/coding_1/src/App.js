import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './folderA/list'
import List2 from './folderA/list2' 
import Button from './folderB/Button'
import Card from './folderC/card'
const App=() =>{

  return (
    <div>
      <List />
      <List2 />
      <Button />
      <Card />
    </div>
  )
}


export default App;
