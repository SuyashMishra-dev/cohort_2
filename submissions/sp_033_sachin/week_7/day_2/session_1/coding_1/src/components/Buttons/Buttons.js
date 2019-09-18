import React from 'react';


const Button = (props) =>{
    return (
        <button style={{color:"white",borderRadius:"15px",background:props.color}}>{props.label}</button>
    )
}

export default Button;