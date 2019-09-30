import React from "react"
import './App.css'



export default class Button extends React.Component{
    
    render(){
        return(
             <div>

               <button className="bg1" style={{backgroundColor:this.props.color1}}>{this.props.b1}</button>
                <button className="bg2" style={{backgroundColor:this.props.color2}}>{this.props.b2}</button>
                <p></p>

             </div>
        	)

    }



   }




