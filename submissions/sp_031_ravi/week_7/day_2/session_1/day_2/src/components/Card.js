import React from 'react';
import Details from './Details';



function Card(props) {
    return(
        <div>
            <div className="container">
                <div className="cardBox">
                    <div className="proTag">PRO</div>
                    <img src="http://www.sarkarinaukrisearch.in/wp-content/uploads/2018/12/beautiful-girl-images2.jpg" className="picture"/>
                    <h2 style={{color:"white",textAlign:"center"}}>{props.infoCard.names}</h2>
                    <h4 style={{color:"white",textAlign:"center"}}>{props.infoCard.country}</h4>
                    <h4 style={{color:"white",textAlign:"center"}}>{props.infoCard.profession}</h4>
                    <button className="messageBtn">Message</button>
                    <button className="followBtn">Following</button>
                
                    <div className="footer">
                        <p className="skills">SKILLS</p>
                        {props.infoCard.skills.map((skill) => <div className="small">{skill}</div>)}
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Card;