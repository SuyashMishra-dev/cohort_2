import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch, BrowserRouter } from "react-router-dom";
import ScoreBoard  from './components/scoreboard';
import NavBar from './components/navbar';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <React.Fragment>
       <NavBar />
       {/* <ScoreBoard /> */}
     </React.Fragment>
     </BrowserRouter>
    </div>
  );
}

export default App;
