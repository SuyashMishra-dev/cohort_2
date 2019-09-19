import React from 'react';

function Button(props){
  
      return (
        <div >

          <button style={{backgroundColor:props.items2}} className=" rounded-pill text-white" >{props.items}</button>

        </div>
      )
  
}


export default Button;   
