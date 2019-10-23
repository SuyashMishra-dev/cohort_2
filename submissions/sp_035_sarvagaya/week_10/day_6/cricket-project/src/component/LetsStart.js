import React from "react";
import {Link} from "react-router-dom";
import Home from "./Home"

class LetsStart extends React.Component
{
    render()
    {
        return(
            <div>
                <div>
                </div>
                <div>
                    <Link className="text-decoration-none" to="/home">
                        <img src="https://wallpapercave.com/wp/wp2778059.jpg" style={{height: 645 , width: 1540}} ></img>
                        <h1 style={{marginTop: -550, color: "white", marginLeft: 650}}>Click to Begin</h1>  
                    </Link>
                </div>
            </div>
        )
    }
}

export default LetsStart;