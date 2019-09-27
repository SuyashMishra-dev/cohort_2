import React from 'react';
import {Link} from 'react-router-dom';
import './Styles.css';

export default class Navbar extends React.Component{
    render(){
        return(
            <div className = "navbar">
                <img />
                <Link to="/mac">Mac</Link>
                <Link to="/ipad">iPad</Link>
                <Link to="/iphone">iPhone</Link>
                <Link to="/watch">Watch</Link>
                <Link to="/tv">TV</Link>
                <Link to="/music">Music</Link>
                <Link to="/support">Support</Link>
            </div>
        );
    }
}