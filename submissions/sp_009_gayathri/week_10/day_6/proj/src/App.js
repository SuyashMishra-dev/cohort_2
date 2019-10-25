import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Player from './components/Player'
import LandingPage from './components/LandingPage'
import Create from './components/Create'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                <Route exact path="/LandingPage" component={LandingPage}/>
                <Route path= "/create" component={Create} />
                    <Route exact path="/details" component={Home}/>
                    <Route path="/player" component={Player}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;