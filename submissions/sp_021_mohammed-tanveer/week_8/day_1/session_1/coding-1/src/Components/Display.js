import React from 'react';

function Display(props){
    return(
        <div>
            <ul>
                <li>{props.each.name}</li>
            </ul>
        </div>
    )
}

export default Display;