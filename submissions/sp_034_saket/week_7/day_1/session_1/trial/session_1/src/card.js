import React from 'react';

class Card extends React.Component{
    render(){
        return (
            <div>
        <div className="class13">
          <br></br>
         <div className="class14">
         <button >PRO</button>
        <img className="image" src = "http://ae01.alicdn.com/kf/HTB1ButRdKSSBuNjy0Flq6zBpVXab.jpg" height = "10%" width = "15%" />
        <div  className="class15">
           <h2>Ricky Park</h2>
         </div>
         <div  className="class16">
           <h6>NEW YORK</h6>
         </div>
         <div  className="class17">
           <p>User interface designer and <br></br> front-end developer</p>
         </div>
            <div >
            <button className="class18">Message</button>
            <button className="class19">Following</button>
            </div>
            <div >
           <button  className="class18 class20">SKILLS</button>
            </div>
            <div>
           <button className="class18 class21">UI/UX</button>
           <button  className="class18 class22">Fron End Developer</button>
           <button  className="class18 class23">HTML</button>
            </div>
           
            <div>
           <button className="class18 class23">CSS</button>
           <button className="class18 class23">JavaScript</button>
           <button className="class18 class23">React</button>
           <button className="class18 class23">Node</button>
            </div>
            
         </div>
       
        
        </div>

      </div>
  
        );
    }
}

export default Card