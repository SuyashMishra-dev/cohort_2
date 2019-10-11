import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";



function Navbar (props){
    let count=props.item.length;
    console.log(count)
    return(
        <div >
            
    <React.Fragment>

          <nav id="navbar-example2" className="navbar navbar-light fixed-top w-100 mt-2"style={{"backgroundColor":"pink"}}>
              <div>
            <img src ="https://www.magnoliabakery.com/wp-content/themes/smpl-magnoliabakery-usa/images/magnolia-bakery-logo.png" />
            <img src="tel:8556225379" />
            </div>
            <h1 className="text-info" style={{"font-family": "Pacifico ,cursive","fontSize":"50px"}} > <a style={{"fontSize":"70px"}} className="text-primary"> M</a> ANGOILIA BAKERY</h1>
          <Link  style={{ "marginLeft":"20px","color":" black"}}to="/ "> <img src="http://www.pngall.com/wp-content/uploads/2016/04/Cart-PNG-File.png" style={{"width":"30px"}}></img>CART {count}</Link>
          </nav>
         
     </React.Fragment>
      
        </div>
    )
}
const mapStateToProps = state =>{
return{
   item: state.addedItems
 }
}
export default connect( mapStateToProps,null)(Navbar);
