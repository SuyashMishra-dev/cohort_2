import React from "react"
import {connect} from 'react-redux'

const Order =(props)=>{
    let a= props.display.map(elem=>{
        return <div>
            <div>{elem}</div>
        </div>
   })
        return(
            <div>
            
            </div>
        )
}
const mapStateToProps=(state)=>{
    return {
                display:state.order
    }
}
    export default connect(
mapStateToProps
)(Order);