import React from 'react';
import {Link,Route,BrowserRouter} from "react-router-dom";
import Learn from './Learn';

const Home = () =>{
    return(
     <React.Fragment>
        <BrowserRouter>
            <div>
                <h1>i Phone 11</h1>
                <h3>Just the right amount of everything.</h3>
                <img className = "image1"src = "./apple1.jpg"/><br></br>
                <Link to = "/learnMore"><h1>LearnMore</h1></Link> 
                <Route path = "/learnmore" components ={Learn}/>
                <div className = "gap"></div>
                <div className="foot">
                    <p>* Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in good condition. Additional trade‑in values require purchase of a new iPhone, subject to availability and limits. Must be at least 18. Apple or its trade-in partners reserve the right to refuse or limit any Trade In transaction for any reason. In‑store trade‑in requires presentation of a valid, government-issued photo ID (local law may require saving this information). Sales tax may be assessed on full value of new iPhone. Additional terms from Apple or Apple’s trade-in partners may apply. Monthly pricing: Available to qualified customers and requires 0% APR, 24‑month installment loan with Citizens One, and iPhone activation with AT&T, Sprint, T‑Mobile, or Verizon. Full terms apply.
                   ** Apple Arcade and Apple TV+ require a subscription. Apple Arcade is now available on iPhone, iPad, and Apple TV and will be available on Mac this fall.
                   Case and band combinations can be made within collections (Apple Watch, Apple Watch Nike, and Apple Watch Hermès) only.</p>
                   
                   {/* <div className = "footerflex">
                       <div>1</div>
                       <div>333</div>
                   </div>
                   <img src = "./footeriphone.png"/> */}
                </div>
            </div>
           
       </BrowserRouter>
     </React.Fragment>
    )
}
export default Home;