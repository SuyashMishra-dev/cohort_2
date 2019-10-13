import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
        
      <nav className="nav fixed-top  bg-dark" style={{height:"70px"}}>
        <Link className="nav-item nav-link ml-4 mt-2" to="/"><img style={{height:"45px",width:"60px"}} src="https://www.iconpacks.net/icons/1/free-home-icon-189-thumb.png"></img></Link>
        <Link className="nav-item nav-link text-white mt-3" style={{ fontSize: "15px" }} to="/rank">RANK</Link>
        <Link className="nav-item nav-link text-white mt-3" style={{ fontSize: "15px" }} to="/show1">SHOW</Link>
        <Link className="nav-item nav-link text-white" to="/"> <h1 style={{ marginLeft: "570px",fontSize: "40px",marginTop:"-10px" }}><span>CRICBOARD<img src="http://pngimg.com/uploads/cricket/cricket_PNG108.png" style={{height:"80px",width:"60px"}}></img></span></h1></Link>
        <Link className="nav-item nav-link text-white mt-3" style={{ fontSize: "15px",marginLeft:"220px" }} to="/adminlog"><span><img src="https://icon-library.net/images/admin-login-icon/admin-login-icon-11.jpg" style={{color:"white" ,height:"35px"}}></img></span>ADMIN LOGIN</Link>
        <Link className="nav-item nav-link text-white mt-3" style={{ fontSize: "15px",marginLeft:"20px" }} to="/login"><span><img src="http://img.clipartlook.com/user-user-clipart-528_594.png" style={{color:"white" ,height:"35px"}}></img></span>LOG IN</Link>
        <Link className="nav-item nav-link text-white mt-3" style={{ fontSize: "15px",marginLeft:"20px" }} to="/signup"><span><img src="http://keapu-webpp01-centin-r46j07o2.cloudapp.net/PU-LECT-2019/images/user_add.png" style={{color:"white" ,height:"35px"}}></img></span>SIGN UP</Link>
        <img src="https://www.vippng.com/png/full/0-476_youtube-bell-icon-png-bell-icon-png-hd.png" style={{width:"20px", height:"25px",marginLeft:"20px",marginTop:"24px"}}></img>
      </nav>
    </div>
  )
    ;
};
export default Navbar;  