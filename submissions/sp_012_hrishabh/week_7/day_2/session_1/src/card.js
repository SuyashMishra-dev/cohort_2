import React from 'react';
import logo from './logo.svg';
import './App.css';
class Card extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            data: {
               name : "Ricky Park",
                location :"NEW-YORK",
                description : "User interface designer and front-end developer",
                skills : [
                    { "item":"UI/UX", "style" : "ui" }, { "item":"Front End Development", "style" : "front" }, {"item":"HTML", "style" : "html" }, {"item":"CSS", "style" : "css" }, {"item":"Javascript", "style" : "javascript" }, {"item":"React", "style" : "react" }, {"item":"Node", "style" : "node" },
                ]
            }
    }
}
    render() {
        return (
        <div>
        <div className = "divCard"></div>
        <div className = "divInside"></div>
        <div className = "divInside inside">
        <div style = {{"color" : "white"}}>SKILLS</div>
        {
            
            this.state.data.skills.map((item) => {
                return (
                    <div>
                       
                        <div className = {item.style}>{item.item}</div>
                    </div>                                     

                    
          
                    
                );
            })
        }
        </div>
        <div className = "divPro">Pro</div>
        <img className = "img" src = 'https://www.persofoto.com/images/vorher-nachher/passfoto-beispiel-nachher.jpg'></img><br></br>
        <span className ="firstName">{this.state.data.name}</span><br></br>
        <span className = "cityName">{this.state.data.location}</span><br></br>
        <div className = "descriptionBlock">
            <span className = "description">{this.state.data.description}</span><br></br>
        </div>
        
        
        <div className = "message">Message</div>
        <div className = "following">Following</div>
        
        
        
        
    
        </div>
        
);
    }
}
  export default Card;