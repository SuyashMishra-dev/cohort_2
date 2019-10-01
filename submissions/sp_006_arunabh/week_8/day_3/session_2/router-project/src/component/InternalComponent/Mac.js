import React from 'react';
import {Link} from 'react-router-dom';

const Mac = () => {
    return(
        <div className = "col content1">
            <h3>MacBook Air</h3>
            <h1>Lightness strikes again.</h1>
            <Link to ="/">Learn more > </Link>
            <Link to = "/"> Buy ></Link>
            <img src="https://image.dhgate.com/0x0/f2/albu/g8/M00/2F/E9/rBVaV1v7dgyAQYFkAAPfPw5JBcg596.jpg" alt="Show" width="1330" height="900"/>
        </div>
    )
} 

export default Mac;