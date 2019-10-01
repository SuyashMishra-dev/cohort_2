import React from 'react';
import {Link} from 'react-router-dom';

const Music = () => {
    return(
        <div className = "col content1">
            <img src="https://9to5mac.com/wp-content/uploads/sites/6/2018/06/apple-music-artist-update.jpg?quality=82&strip=all&w=1600" alt="Show" width="1330" height="700"/>
            <h3>Music</h3>
            <h1>Lose yourself in 50 million songs.</h1>
            <Link to = "/"> Try it free*</Link>
            <h5>From $24.95/mo. or $599 with trade-in.*</h5>
        </div>
    )
} 

export default Music;