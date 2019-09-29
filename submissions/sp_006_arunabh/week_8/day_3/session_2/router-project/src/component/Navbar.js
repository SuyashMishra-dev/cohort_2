import React from 'react';
import {Link} from 'react-router-dom';
import './Styles.css';

export default class Navbar extends React.Component{
    render(){
        return(
            <div className = "navbar col"  style={{background:"black"}}>
                <Link to="/"><img src = "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2011/10/applelogo.jpg" alt="Apple Logo" height="50"/></Link>
                <Link className = "text-light" to="/mac">Mac</Link>
                <Link className = "text-light" to="/ipad">iPad</Link>
                <Link className = "text-light" to="/iphone">iPhone</Link>
                <Link className = "text-light" to="/watch">Watch</Link>
                <Link className = "text-light" to="/tv">TV</Link>
                <Link className = "text-light" to="/music">Music</Link>
                <Link className = "text-light" to="/support">Support</Link>
            </div>
        );
    }
}