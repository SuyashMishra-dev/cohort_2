import React from 'react';
import './App.css';




function Btn (props){
    const Clsdd=  <button className="btn margin" style={{background:props.list.color1}}>{props.list.label1}</button> 
       return( <div className="flex">
               {Clsdd}
        </div> 
        );
    }
    

export default Btn;
