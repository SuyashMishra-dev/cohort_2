import React from 'react';
import { connect } from "react-redux";
import {addCard} from  "./cartAction";

class Shopcart extends React.Component{
    handleClick =(id) => {
      this.props.addCard(id);
    }
    render(){
    let itemsCart =this.props.items.map(item =>{
        return(
            <div>
            <div className="float-left card ml-4 mt-3" >
                <img  style={{"width":"300px","height":"200px"}}src ={ item.ImangeUrl} />
                <p className="text-center"> Name:{item.Name} </p>
                <p className="text-center"> Cost:{item.cost}</p>
                <button type="button" className="bg-success rounded-pill w-50 offset-3" onClick={()=>this.handleClick(item.id)}> Add Type </button>
            </div>
            </div>
        )

    })
        return(
            
            <div style={{"marginTop":"200px"}}>
                {itemsCart}
            </div>
        )
    }
}
const mapStateToProps =(state) => {
    return{
        items:state.items
    }
}

const mapDispatchToProps =(dispatch) =>{
 return {
    addCard : (id) => dispatch(addCard(id))
 }

}
export default connect (mapStateToProps,mapDispatchToProps)(Shopcart);