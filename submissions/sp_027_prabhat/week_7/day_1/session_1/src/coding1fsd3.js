import React from 'react';
import logo from './logo.svg';
import './App.css';


function Fsd3() {
  return (
    <div>
        <div className="fsdbg">
            <h5 className="pro">PRO</h5>
            <img className="bord" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSnFrLeagEbF2KENVhWluKb5c6IEWjm4Pakk30BkSKZIi5TU1J" height = "25%" width = "25%" />
            <h3 className="textcenter">Ricky Park</h3>
            <p className="textcenter">user interface designer and</p>
            <p className="textcenter">front-end devloper</p>
            <div>
                <button className="msg">Message</button>
                <button className="foll">Following</button>
            </div>
            <div className="marginleft">
                <p className="buttoncol">SKILLS</p>
                <button className="buttoncol">UI/UX</button>
                <button className="buttoncol"b>Front End Development</button>
                <button className="buttoncol">HTML</button>

            </div> 
            <div className="marginleft">
                <button className="buttoncol ">CSS</button>
                <button className="buttoncol marg">JavaScript</button>
                <button className="buttoncol marg">React</button>
                <button className="buttoncol marg">Node</button> 
            </div>
        </div>
       
    </div>
  );
}

export default Fsd3;
