import React from 'react';
import {Link} from 'react-router-dom';

const iPhone = () => {
    return(
        <div className = "col content1">
            <h3>iPhone 11 Pro</h3>
            <h1>Pro Cameras. Pro display. Pro performance</h1>
            <Link to = "/"> Buy ></Link>
            <h5>From $24.95/mo. or $599 with trade-in.*</h5>
            <img src="https://www.slashgear.com/wp-content/uploads/2019/09/apple-iphone-11-pro-19-1.jpg" alt="Show" width="1330" height="700"/>
        </div>
    )
} 

export default iPhone;