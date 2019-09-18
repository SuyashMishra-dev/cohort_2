import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Os from './components/a/Os';
import JoinUs from './components/b/JoinUs';
import Settings from './components/b/Settings';
import Login from './components/b/Login';
import ContactUS from './components/b/ContactUS';
import Search from './components/b/Search';
import Help from './components/b/Help';
import Home from './components/b/Home';
import Download from './components/b/Download';
import Card from './components/c/Card'






function App() {
  return (
    <div>
      <Os />
      <div className="flex mb">
      <JoinUs /> 
      <Settings />
      </div>
      <div className="flex mb">
      <Login />
      <ContactUS />
      </div>
      <div className="flex mb">
      <Search />
      <Help />
      </div>
      <div className="flex">
      <Home />
      <Download />
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;
