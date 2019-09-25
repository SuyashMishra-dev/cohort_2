import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./component/NavBar";
import FirstDiv from "./component/FirstDiv";
import SecondDiv from "./component/SecondDiv";
import ThirdDiv from "./component/ThirdDiv";
import FourthDiv from "./component/FouthDiv";
import FifthDiv from "./component/FifthDiv";

function App() {
  return (
    <div style={{backgroundColor: "black"}}>
      <NavBar />
      <div style={{height:1200}}>
        <FirstDiv />
      </div>
      <div style={{height:700}}>
        <SecondDiv />
      </div>
      <div style={{height:770}}>
        <ThirdDiv />
      </div>
      <div style={{}}>
        <FourthDiv />
      </div>
      <div>
        <FifthDiv />
      </div>
    </div>
  );
}

export default App;
