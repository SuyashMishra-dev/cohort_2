import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from "react-router-dom";
import Home from './home';
import Form from './Form'





class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        capital:"",
        continent:"",
        gdp:"",
        population: "",
        inputarray: []

      }
    }

    onSubmit = (capital, continent, gdp,population) => {
      let details = {
          capital:capital,
          continent:continent,
          population:population
      }
         this.setState({

           inputarray:this.state.inputarray.concat(details)
         })
    }


  render() {
    return (
      <React.Fragment>
         <BrowserRouter>
        
         <div>
             <Link to="/Home">Home</Link>
            
             {/* <Link to=""></Link> */}
             
            
            
        <Route path = "/Form" exact component = {Form} />
        <Route path = "/Home" exact component = {Home} />
       
         
        </div>
        </BrowserRouter>
      </React.Fragment>

    );
  }
}

export default App;
