import React from 'react';
import {Link} from 'react-router-dom';

const iPad = () => {
    return(
        <div className = "col content1">
            <h1>Last chance to save on an iPad for college.</h1>
            <h3>Save up to $50 on an iPad and get Beats on us. Offer ends 9.26.</h3>
            <Link to = "/"> Shop ></Link>
            <h1>Welcome to the new generation of iPad</h1>
            <img src="https://fsmedia.imgix.net/4b/55/18/72/e8f1/42c4/8689/b0a14c65a0c9/apple-ipad-pro-129-32gb-wifi-silver-refurbished.jpeg?crop=edges&fit=crop&auto=format%2Ccompress&dpr=2&h=315&w=630" alt="Show" width="1330" height="500"/>
        </div>
    )
} 

export default iPad;