import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Create from './components/Create';
import Show from './components/Show';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
    
            <div className="App">
                <Navbar/>
                <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/create" component={Create}/>
                <Route path="/show" component={Show}/>
                </Switch>           
           </div>

    </BrowserRouter>
  );
}

export default App;
