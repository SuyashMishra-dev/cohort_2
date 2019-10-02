import React from 'react';

const Item =(props)=> {
    return(
          <div>
        {props.data.map((ele,i) => {
            let decoration='';
            if(ele.isFinished){
                decoration  ={textDecoration:'line-through'};
            }
            else{
                decoration  ={textDecoration:'none'};
            }
            return(
                
          <div  key={ele.name}>
        <input className="ml-5 mt-3" type="checkbox" onChange={(e)=> props.changeFunc(e,i)} checked={ele.isFinished}></input>
        <p  className="ml-5" style={decoration}> {ele.name}</p>
        <button type="Button"className="bg-success ml-5"onClick={(e)=> props.removeFunc(e,i)}> Remove</button>
        </div>
        )})}
        </div>
    )
}
export default Item;