import React, { Component } from "react"



class MOS extends React.Component{
	render(){
		return(
            
            <div>
            <h1 className="head">{this.props.head}</h1>
            <ul>
            <li className="l1">{this.props.l1}</li>
             <li className="l2">{this.props.l2}</li>
              <li className="l3">{this.props.l3}</li>
              <li className="l4">{this.props.l4}</li>
              </ul>

            </div>


			)
	}

}











export default MOS
