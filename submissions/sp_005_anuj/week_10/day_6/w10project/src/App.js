import React from 'react';
import './App.css';
import Home from './component/home.js'
import Create from './component/create.js';
import Show from './component/show.js';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Details from './component/Details';

function App() {
  return (
    <div>   
      {/* <h1 className = "text-center text-light"><i>Cric Fever</i></h1>
      <div className = "row"> 

        <div className = "col-lg-6 col-sm-12 col-md-12" style = {{backgroundColor : "rgba(0,0,0,0.5)"}}>
          <h1 className = "text-center text-light"><Link to="/create">Create</Link></h1>
          <img className = "w-100" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSsRLc0GimWRSr739ZENydGfgK8gKrtw-sRvUyRZRlMGSiExLd" style = {{height:"500px"}}></img>
        </div>

        <div className = "col-lg-6 col-sm-12 col-md-12" style = {{backgroundColor : "rgba(0,0,0,0.5)"}}>
          <h1 className = "text-center text-light"><Link to="/show">Show</Link></h1>
          <img className = "w-100" src = "https://t4.ftcdn.net/jpg/01/45/93/63/500_F_145936385_eISFtVefWQfLhc8GJ9p2BADnOzQWY1z3.jpg" style = {{height:"500px"}}></img>
        </div>

      </div> */}
      <BrowserRouter>
      <Link to = "/" ></Link>
      <Link to = "/create" >Create</Link>
      <Link to = "/show" >Show</Link>
      <Route path = "/home" exact component = {Home} /> 
      <Route path = "/create" component = {Create} /> 
      <Route path = "/show" component = {Show} />
      <Route path ="/details/:name" component={Details}/>
      </BrowserRouter>
    </div>

  );
}

export default App;
