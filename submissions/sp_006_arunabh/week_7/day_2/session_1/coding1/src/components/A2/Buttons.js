import React from 'react';
import '../styles.css';

function Buttons(props) {
    return (
        <div>
            <button className = "Buttons" style={{background : props.color}}>{props.label}</button>
        </div>
    );
}

export default Buttons;