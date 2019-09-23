import React from 'react';
import './Card.css'

function Card() {
    return (
        <div>
            <div className="cardContainer">
                <div className="cardBox">
                    <br></br>
                    <p className="proText"> PRO </p>
                    <img className="picture"  src="http://www.sarkarinaukrisearch.in/wp-content/uploads/2018/12/beautiful-girl-images2.jpg"></img>
                    <h3 style={{color:"white", textAlign:"center",fontSize:"25px",marginTop:"1px"}}>Ricky Park</h3>
                    <h5 style={{color:"white", textAlign:"center",fontSize:"20px",marginTop:"1px"}}>NEW YORK</h5>
                    <p style={{color:"white", textAlign:"center",fontSize:"18px"}}>User interface designer and <br></br>front-end developer</p>
                    <button className="messageButton">Messaage</button>
                    <button className="followButton">Following</button>

                    <div className="footer">
                        <p className="skills">SKILLS</p>
                        <div className="small">UI/UX</div>
                        <div className="frontEnd">Front End Development</div>
                        <div className="small">HTML</div>
                        <br></br>
                        <div className="small">CSS</div>
                        <div className="small">Javascript</div>
                        <div className="small">React</div>
                        <div className="small"> Node</div>
                    </div>

                </div>
                
                </div>
            </div>
            
        
    );
}

export default Card;