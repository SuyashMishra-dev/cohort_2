import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div>
            
            <div className="MenuStyle">
                <p style={{color:"white"}}>
                   <Link to="/">Home</Link> 
                </p>
            </div>
                    
           
               <div className="btn">
                      <button >
                          <Link to="create">DATA</Link> 
                      </button>

                      <button style={{marginLeft:"20px"}}>
                           <Link to="show">Show</Link> 
                      </button>
               </div>       
               
        </div>
    )
}

export default Navbar
