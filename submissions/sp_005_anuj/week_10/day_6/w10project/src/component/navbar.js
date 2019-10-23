import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className=" nav bg-dark" style={{height:"70px"}}>
        <Link className="nav-item nav-link text-white mt-3" style={{ fontSize: "15px" }} to="/create">Create</Link>
        <Link className="nav-item nav-link text-white mt-3 float-right" style={{ fontSize: "15px" }} to="/show">show</Link>
      </nav>
    </div>
  );
};
export default Navbar;  