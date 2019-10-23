import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Create from './components/Create'
import Show from "./components/Show"
import {BrowserRouter} from 'react-router-dom'
import Playername from './components/Name'

import './App.css';
const App =()=>{
  return(
    <BrowserRouter>   
        <h1 className="text-primary text-center bg-dark" >CricketScore</h1>
        <div className=" text-justify">          
            <button className="mx-5"><Link to="/create" className="navbar-brand text-primary mx-5">Create</Link></button> 
            <button><Link to="/Show" className="navbar-brand text-primary mx-5">Show</Link></button>
            
          </div>
      
          <Route path="/create" exact component={Create} />
          <Route path="/show" exact component={Show} />
          <Route path="/Playername:itemId" render={props => <Playername {...props} />} />

        </BrowserRouter>
   
  )
}

export default App;
