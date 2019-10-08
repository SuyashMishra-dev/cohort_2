import React from 'react'

function Coder (){
        return(
    <div className="container">
        <div className= "bg">
                <button className="yellow">PRO</button>
                <div>
                        <img src = "https://via.placeholder.com/150" className="img" height = "150px" width = "150px" />
                </div>
                <h3 className="align">Ricky Park</h3>
                <h5 className="align">NEW YORK</h5>
                <p className="align">User interface designer and 
                                     <br/>front-end developer</p>
                <div>
                        <button className="design">Message</button>
                        <button className="design1">Following</button>
                </div>
                <div className="bg2" >
                        <p className="skill1">skills</p>
                        <button className="skill">UI/UX</button>
                        <button className="skill">Front End Development</button>
                        <button className="skill">HTML</button>
                        <button className="skill">CSS</button>
                        <button className="skill">JavaScript</button>
                        <button className="skill">React</button>
                        <button className="skill">Node</button>                        
                </div>                     

        </div>
    </div>
        )
}
export default Coder;


