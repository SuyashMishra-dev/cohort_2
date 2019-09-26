import React from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component{
    render(){
        return(
            <div className = "navbar">
                <Link to = "/">HOME</Link>
                <Link to = "/contact">CONTACT</Link>
                <Link to = "/about">ABOUT</Link>
                <Link to = "/services">SERVICES</Link>
                <Link to = "/login">LOGIN</Link>
            </div>
        );
    }
}