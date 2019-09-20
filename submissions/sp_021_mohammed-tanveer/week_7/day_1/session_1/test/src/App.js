import React from 'react';
import logo from './logo.svg';
import './App.css';
import Companies from './components/Companies';
import Eightbuttons from './components/Eightbuttons';
import Intro from './components/Intro';

var arr = ["TANVEER","MOHAMMED"];

function App() {
  return (
    <div>
      <Companies name="Company"/>

      {arr.map((item,index)=>{
        return(<Eightbuttons name={item} key={index}/>);
      })}

      <Intro />
    </div>
  );
}

export default App;