import React from "react";
import { Link} from "react-router-dom";
class Shop extends React.Component {
  constructor() {
    super();
}
render(){
    return(
        <div>
        <hr></hr>
        <h1 style={{ textAlign: "center", clear: "both", marginTop: "50px" }}>SHOP</h1>
        <hr></hr>
        <div style={{ marginLeft: "200px" }}>
         <Link to="/Earrings"> <img src="https://cdn.shopify.com/s/files/1/0068/1062/t/6/assets/banner-home-bottom-1.jpg?791" style={{ width: "400px", float: "left", marginLeft: "50px" }}></img></Link>
         <Link to="/Bracelates"><img src="https://cdn.shopify.com/s/files/1/0068/1062/t/6/assets/banner-home-bottom-2.jpg?791" style={{ width: "400px", float: "left", marginLeft: "50px" }}></img></Link>
         <Link to="/Necklaces"><img src="https://cdn.shopify.com/s/files/1/0068/1062/t/6/assets/banner-home-bottom-3.jpg?791" style={{ width: "400px", float: "left", marginLeft: "50px" }}></img></Link>
        </div>
        </div>
    );

}
}
export default Shop;