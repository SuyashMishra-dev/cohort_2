import React from 'react';
import logo from './logo.svg';
import './App.css';
import Operating from './components/A1/operating';
import Manufacturing from './components/A1/manufacturing'
import Joinus from './components/A2/joinus';
import Setting from './components/A2/setting';
import Login from './components/A2/login';
import Contactus from './components/A2/Contactus'
import Search from './components/A2/search';
import Help from './components/A2/help';
import Home from './components/A2/home';
import Download from './components/A2/download';
import Card from './components/A3/card';


function App() {
  return (
    <div>
    <div>
      <Operating />  
      <Manufacturing />
    </div>
    <div className = 'row'>
      <div className = 'col-lg-1'>
      <Joinus />
      </div>
      <div className = 'col-lg-1'>
      <Setting />
      </div>
    </div>
    <div className = 'row mt-3'>
    <div className = 'col-lg-1'>
      <Login />
    </div>
    <div className = 'col-lg-1'>
      <Contactus />
    </div>
    </div>
    <div className = 'row mt-3'>
    <div className = 'col-lg-1'>
      <Search />
    </div>
    <div className = 'col-lg-1'>
      <Help />
    </div>
    </div>
    <div className = 'row mt-3'>
    <div className = 'col-lg-1'>
      <Home />
    </div>
    <div className = 'col-lg-1'>
      <Download />
    </div>
    </div>
    <div>
      <Card />
    </div>
    </div>
  );
}

export default App;
