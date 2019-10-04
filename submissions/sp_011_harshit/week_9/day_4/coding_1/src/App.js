import React from 'react';
import TODO from './Todo'
import './App.css';
import TOTAL from './Total'

class App extends React.Component{
render() {
  return (
    <div>
        <TODO />
        <TOTAL />
    </div>
  )
}
}
export default App;
