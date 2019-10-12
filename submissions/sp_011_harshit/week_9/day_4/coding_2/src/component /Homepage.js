import React from "react"
import { connect } from "react-redux"
import {add} from './reducer'


const Homepage =(props)=>
{
    let a=props.item_name.map((a,index)=>{
        return <div onClick={()=>props.additem(index)} className="col-xl-4 ">
                <img src={a.img}></img>
                <h3 className="text-primary">{a.name}</h3>
                <h4>{a.price}</h4>
        </div>
    })
return(
    <div className="row col-xl-12"> 
    
        {a}
    </div>
)
}
const mapStateToProps = (state)=>{
return{
    item_name:state.items
}
}

const mapStateToDispatch = (dispatch)=>{
return{
        additem:(val)=>dispatch(add(val))
}
}

export default connect(
    mapStateToProps,
    mapStateToDispatch
)(Homepage);