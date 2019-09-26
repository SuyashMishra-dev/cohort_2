import React from "react";

function NavBar()
{
    return(
        <div style={{backgroundColor: "black"}} className="d-flex text-light text-center">
            <img style={{height:50, marginLeft: 200}} src="https://images-na.ssl-images-amazon.com/images/I/31yHeZqoYkL._SX425_.jpg" alt="logo"/>
            <p style={{marginLeft: 100}}>Mac</p>
            <p style={{marginLeft: 100}}>iPad</p>
            <p style={{marginLeft: 50}}>iPhone</p>
            <p style={{marginLeft: 50}}>Watch</p>
            <p style={{marginLeft: 50}}>Tv</p>
            <p style={{marginLeft: 50}}>Music</p>
            <p style={{marginLeft: 50}}>Support</p>
        </div>
    )
}

export default NavBar;