import React from "react"
import {connect} from "react-redux"
import {useradd,order} from './reducer'

const Cart =(props)=>{
    let a =props.cartshow.map(elem=>{
        return <div onClick={()=>{console.log(elem.name)}}>
           <h1>{elem.name}</h1> 
           <img src={elem.img}></img>
          
        </div>
    })
        return(
            <div>
                <h1 style={{ color: "red" }}>Cart_Item's  </h1>
                <div className="col-xl-4">
                    {a}
                </div>
                <button className="btn btn-danger display-3" onClick={()=>props.order1()}><h1>PlaceOrder<p>{props.final}</p></h1></button>
            </div>
        )
}
const mapStateToProps=(state)=>{
return{
    cartshow:state.cart,
    final:state.finalprice
}
}
const mapDispatchToProps=(dispatch)=>{
    return{
       order1:()=>dispatch(order())
    }
    }


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);