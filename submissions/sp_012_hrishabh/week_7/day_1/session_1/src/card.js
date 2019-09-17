import React from 'react';
import './App.css';
export default function Card() {
    return (
        <div>
            <div className = "divCard"></div>
            <div className = "divInside"></div>
            <div className = "divInside inside"></div>
            <div className = "divPro">Pro</div>
            <img className = "img" src = 'https://www.persofoto.com/images/vorher-nachher/passfoto-beispiel-nachher.jpg'></img><br></br>
            <span className ="firstName">Ricky Park</span><br></br>
            <span className = "cityName">New-York</span><br></br>
            <span className = "description">User interface designer and </span><br></br>
            <span className = "description line">front-end developer</span>
            
            <div className = "message">Message</div>
            <div className = "following">Following</div>
            
            <div className = "skills">
            <div className = "span">SKILLS</div>
            <div className = "ui">UI/UX</div>
            <div className = "front">Front End Development</div>
            <div className = "html">HTML</div>
            <div className = "css">CSS</div>
            <div className = "javascript">JavaScript</div>
            <div className = "react">React</div>
            <div className = "node">Node</div>
            </div>
        
            </div>
            
    )
}