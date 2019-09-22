import React from 'react';

const Buttons = (props) => {
    return(
        <button style={{color:"white", background:props.change.color,borderRadius:"20px",width:"130px",margin:"15px"}}>{props.change.label}</button>
    );
}
export default Buttons;