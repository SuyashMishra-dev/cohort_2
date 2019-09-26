import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
const Navbar = () => {
  return (
    <div>
      <nav className="nav bg-dark fixed-top mt-3">
        <Link className="nav-item nav-link text-white" style={{ fontSize: "20px" }} to="/">Home</Link>

        <Link className="nav-item nav-link text-white" style={{ fontSize: "20px" }} to="/about">About</Link>

        <Link className="nav-item nav-link text-white" style={{ fontSize: "20px" }} to="/shop">Shop</Link>

        <Link className="nav-item nav-link text-white" style={{ fontSize: "20px" }} to="/lookbook">Lookbook</Link>

        <Link className="nav-item nav-link text-white" style={{ fontSize: "20px" }} to="/login">Log In</Link>

        <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-540x360/07/b3/04/e1.jpg" style={{ width: "40px", height: "40px", marginTop: "10px", marginLeft: "430px" }}></img>
        <h1 className="text-white" style={{ marginLeft: "10px", marginRight: "10px" }}>कोहिNoor</h1>
        <img src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-540x360/07/b3/04/e1.jpg" style={{ width: "40px", height: "40px", marginTop: "10px" }}></img>
      </nav>
    </div>
  )
    ;
};
export default Navbar;