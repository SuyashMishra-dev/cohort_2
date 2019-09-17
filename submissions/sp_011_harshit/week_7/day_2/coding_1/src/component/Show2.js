import React from 'react';

function Show2(props){
  
      return (
        <div>
           <div style={{display: 'grid',  gridGap: '8px',gridTemplateColumns:'140px 140px',marginLeft:'850px'}}>
            {props.items.map(a=>
           
                <button  className="flex btn btn-primary rounded-pill" >{a}</button>
                
            )}
            </div>
           
              </div>
      )
  
}


export default Show2;   