import React from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";

function Navbar (){
    return(
        <div style={{marginBottom:300}}>
            
    <React.Fragment>
          <nav id="navbar-example2" className="navbar navbar-light bg-light fixed-top ">

          <Link  style={{ "marginLeft":"20px","color":" black"}}to="/">Home</Link>
     
          <Link  style={{ "marginLeft":"550px","color":" black"}}to="/shopnow">Shop Now</Link>
     
          <Link style={{ "marginRight":"300px","color":" black"}} to="/about ">About</Link>
         
          <Link style={{ "marginLeft":"-300px","color":" black"}} to="/fAQ">FAQ</Link>

          <Link style={{ "marginRight":"450px","color":" black"}} to="/wholesale">WholeSale</Link>

          <h1 className =" font-weight-bold mr-5 float-right offset-4"style={{ "color":" #FF5733 ","fontSize":"100px"}}> CUPPOW</h1>
    
          <Link  className ="float-Right" to="/Login"> login</Link>

          </nav>
         
     </React.Fragment>
      
        </div>
    )
}
export default Navbar;