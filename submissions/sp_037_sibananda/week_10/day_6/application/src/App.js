import React from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./components/home";
import styles from './app.module.css'

export default class App extends React.Component{
  render(){
    return(<React.Fragment>
      <BrowserRouter>
      <div class="alert alert-primary" role="alert" >
        <Link className={styles.nav} to="/Home">
          
          Home</Link>
      </div>
      <Route path="/Home" exact component={Home}></Route>
      
      </BrowserRouter>
    </React.Fragment>)
  }
}