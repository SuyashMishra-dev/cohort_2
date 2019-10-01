import React from 'react';
import {Link} from 'react-router-dom';

const Watch = () => {
    return(
        <div className = "col content1">
            <h1>WATCH</h1>
            <h3>SERIES 5</h3>
            <Link to = "/"> Buy ></Link>
            <h3>You've never seen a watch like this.</h3>
            <img src="https://media.wired.com/photos/5a3030635a2d9a4a532ba9d3/master/w_2176,h_1632,c_limit/applewatchreview-IL.jpg" alt="Show" width="1330" height="700"/>
        </div>
    )
} 

export default Watch;