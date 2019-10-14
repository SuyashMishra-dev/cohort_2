import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
const Navbar = () => {
  return (
    <div>
      <nav className="nav bg-dark fixed-top mt-3">
        <Link className="nav-item nav-link text-white" style={{ fontSize: "20px",marginLeft:"50px" }} to="/">Home</Link>

        <Link className="nav-item nav-link text-white" style={{ fontSize: "20px" }} to="/about">About</Link>

        <Link className="nav-item nav-link text-white" style={{ fontSize: "20px" }} to="/shop">Shop</Link>

        <Link className="nav-item nav-link text-white" style={{ fontSize: "20px" }} to="/lookbook">Lookbook</Link>

        <img src="http://pngimg.com/uploads/diamond/diamond_PNG6701.png" style={{ width: "40px", height: "40px", marginTop: "10px", marginLeft: "430px" }}></img>
       <Link to="/"> <h1 className="text-white" style={{ marginLeft: "10px", marginRight: "10px" }}>कोहिNoor</h1></Link>
        <img src="http://pngimg.com/uploads/diamond/diamond_PNG6701.png" style={{ width: "40px", height: "40px", marginTop: "10px" }}></img>
        <Link className="nav-item nav-link text-white" style={{ fontSize: "20px",marginLeft:"350px" }} to="/login">Log In</Link>
        <Link className="nav-item nav-link text-white" style={{ fontSize: "20px",marginLeft:"20px" }} to="/Signup">Sign Up</Link>
        <img src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843__340.png" style={{width:"30px", height:"30px",marginLeft:"30px",marginTop:"10px"}}></img>
        <img src="https://www.vippng.com/png/full/0-476_youtube-bell-icon-png-bell-icon-png-hd.png" style={{width:"25px", height:"25px",marginLeft:"40px",marginTop:"15px"}}></img>
      </nav>
    </div>
  )
    ;
};
export default Navbar;