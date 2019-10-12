import React from "react"
import {connect} from 'react-redux';

class History extends React.Component{
	render(){
        let result = this.props.resultArray.filter((item)=>{
            return item != undefined
        })
        console.log(result)
		return(
			<div style ={{color:"black"}}>
				
				History:
			<ul>
				{result.map((items)=>{
					return ( <li> {items}  =  {eval(items)} </li>)
				})}
			</ul>
			</div>
		);
	}
}

const mapStateToProps = state =>{
	return {
		resultArray : state.resultArray
	}
}
export default connect(mapStateToProps)(History);