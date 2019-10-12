import React from 'react';
import './App.css';
import { Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./Component/Home";
// import Back from "./Component/Back"
import Create from "./Component/Create";
// import PlayListRedux from "./PlayListRedux";
import Fotter from "./Component/Fotter";
import Show from "./Component/Show";
import Name from "./Component/Name";
// import {connect} from "react-redux";
// import {anotherName} from './actions/myactions'

function App() {
  return (
<div className="App">
    <React.Fragment>
        <BrowserRouter>
        {/* <Back /> */}
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark row">

          <Link to="/home" ><img width="50px" height="30px" src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/red_repicthousebase_1484336386-1.png" />Home</Link>
          <Link to="/Create" class="nav-item nav-link active text-light" >Create</Link>
                        <Link to="/Show" class="nav-item nav-link active text-light" >Show</Link>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class=" d-flex justify-content-right navbar-nav col-md-8">
              {/* <Link to="/home" class="nav-item nav-link active ml-5" >Home <span class="sr-only">(current)</span></Link> */}
             
              {/* <Link to="/support" class="nav-item nav-link active ml-5" >Support</Link> */}
             
              </div>
            </div>
          </nav>
          <Route path="/home" exact component={Home} />
          <Route path="/create" component={Create} />
          {/* <Route path="/PlayListRedux" component={PlayListRedux} /> */}
          <Route path="/Show" component={Show} />
          {/* <Route path="/Details:itemId" component={Details} /> */}
          {/* <Route path="/Details" component={Details} /> */}


          <Route path="/Name:itemId" render={props => <Name {...props} />} />


<Fotter />

        </BrowserRouter>
    </React.Fragment>
    
     </div>
  
  );
}


  export default App;
