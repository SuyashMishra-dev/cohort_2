import React from 'react'
import { connect } from "react-redux"
import { insertAction } from './Addele'

const Total = (props) =>
(
<div>
    <h6 className="offset-3">{props.leftvalue}</h6>
</div>
)
const mapStateToProps = (state) =>{
    if(state.saveditems.length>0)
    {
        
        console.log("hi")
    }
    return{
            leftvalue:state.saveditems.length
    }
    }
    

export default connect(
    mapStateToProps
)(Total);