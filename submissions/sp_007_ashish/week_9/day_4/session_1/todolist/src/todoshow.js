import React from 'react';
import {connect } from "react-redux";
class TodoShow extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
      //  console.log(this.props.chkBox);
        var chk = this.props.chkBox;
        var checkedStyle ={
            color:"gray",
            textDecoration:"line-through"
           }
        return(
            <div> 
                 <div> {this.props.name}</div>
                      <div className="alert alert-primary w-25 my-2" role="alert">
                        <input 
                        style={chk?{"textDecoration" :"line-through"}:null}
                        type="checkbox" class="form-check-input"  checked={this.props.chkBox} onChange={()=>this.props.chk(0,1)}/>
                         {this.props.name}
                    </div>
                 </div>
        );
    }
}

export default TodoShow