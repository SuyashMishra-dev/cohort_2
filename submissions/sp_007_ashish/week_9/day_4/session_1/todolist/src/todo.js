import React from 'react';
import {connect } from "react-redux";
import {addItem,setVal,getVal,handCheck} from './todostore';
import TodoShow from './todoshow';
console.log(addItem(10))
console.log(setVal(50))
console.log(getVal().num)

const Todo =(props) =>(
    <div>
       <div>
          
           {/* <div>{props.checkStatus}</div>
           <div>{props.value.input}</div> */}
           <input onChange={(e)=>props.set(e.target.value)}/>
           <button className ="btn btn-primary ml-2"onClick={()=>props.add(props.value.input)}>Add Item</button>
           {props.value.item.map((i,index)=>{return<TodoShow name ={i.value} idx={index} chkBox={i.state} chk={props.handCheck}/>})}
       </div>
    </div>
);

const mapStateToProps =state =>{
    console.log('map state',state)
    return {
       value:state.todoapp
    };
};
const mapDispatchToProps = dispatch =>{
    console.log("dispatch called");
    return({
      add: (item) => dispatch(addItem(item)),
      set :(val) =>dispatch(setVal(val)),
      handCheck:(id,val)=>dispatch(handCheck(id,val))
    })
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);
