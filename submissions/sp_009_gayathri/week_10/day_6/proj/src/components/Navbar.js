import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                   
                    
                    <ul className="right">
                        <li><Link to= "/LandingPage">Home</Link> </li>
                        <li><Link to="/details">List Page</Link></li>
                        <li><Link to="/players">PlayerDetails</Link></li>
                       
                     
                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;