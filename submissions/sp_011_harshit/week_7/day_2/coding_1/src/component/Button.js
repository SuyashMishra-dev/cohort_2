import React from 'react';

function Button(props){
      return (  
              <div className="col-xl-6 " >
                      <button style={{backgroundColor:props.items2}} className="rounded-pill " >{props.items}</button>
              </div>
      )
}


export default Button; 