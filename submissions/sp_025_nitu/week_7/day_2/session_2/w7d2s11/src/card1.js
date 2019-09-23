import React from 'react';
import './App.css';

class Card1 extends React.Component{
    render(){
        return (
            <div>
       <div class="box1">
           <br></br>
           <div class="box2">
               <p class="pro">
                pro
               </p>
               <img class="img"src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg "></img>
            <p class="Ricky1"> Ricky Park</p>
            <p class="Ricky2"> New york</p>
            <button class="btn9">Message</button>
            <button class="btn10">following</button>
            <div class="box3">
                <p> skill</p>
                <button class="class1"> UI/UX</button>
                <button class="class2"> front end developer</button>
                <button class="class3"> HTML</button>
                <br></br>
                <button class="class4"> CSS</button>
                <button class="class5"> Java script</button>
                <button class="class6"> React</button>
                <button class="class7"> Node</button>
            </div>
           </div>
       </div>
    </div>
        );
    }
}

export default Card1