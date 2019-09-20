import React from 'react';

const Buttons = (props) => {
    
    return(
        <div style={{marginLeft:"550px"}}>
                <button style={{background:props.clr,borderRadius:100+"px"}} >{props.label}</button>
        </div>
    )
}
export default Buttons