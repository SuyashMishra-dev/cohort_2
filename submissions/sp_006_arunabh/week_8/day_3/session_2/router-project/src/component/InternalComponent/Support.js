import React from 'react';
import {Link} from 'react-router-dom';

const Support = () => {
    return(
        <div className = "col content1">
            <img src="https://cdn.cultofmac.com/wp-content/uploads/2016/04/apple-support-redesign-780x419.jpg" alt="Show" width="1330" height="500"/>
            <h3>Apple Card</h3>
            <h4>Designed for iPhone and a healthier financial life, Apple Card sets a new level of security and privacy.</h4>
            <Link to = "/"> Learn more about Apple Card ></Link>
        </div>
    )
} 

export default Support;