import React from 'react';

export const Button = (props) => {
    let keyStroke = { type: props.data.type, key: props.data.key }
    return (
        <div id={props.data.id} >
            <h2 style={{color: props.data.color}} onClick={() => props.function(keyStroke)} >{props.data.key}</h2>
        </div>
    )
}