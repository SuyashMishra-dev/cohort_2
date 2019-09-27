import React from 'react';
// import {Link,Route,BrowserRouter} from "react-router-dom";

const About = () =>{
    return(
    //  <React.Fragment>
    //     <BrowserRouter>
            <div>
                {/* <div className = "gap"></div> */}
                <div className = "about">
                    <div>
                        <img className = "aboutimage" src = "./about1.jpeg"/>
                    </div>
                    <div>
                        <img className = "aboutimage" src = "./about2.jpg"/>
                    </div>
                    <div>
                        <img className = "aboutimage" src = "./about3.webp"/>
                    </div>
                </div>
                <h1>World's best company</h1>
                <h1>3M+ Employees</h1>
           </div>
           
    //    </BrowserRouter>
    //  </React.Fragment>
    )
}
export default About;