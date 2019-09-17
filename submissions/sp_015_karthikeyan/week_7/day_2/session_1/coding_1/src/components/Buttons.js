import React from 'react';

const Buttons = (props) => {
    let i = -1;
    return(
        <div style={{display: 'grid', gridTemplateColumns: '150px 150px', gridGap: '10px'}}>
            {props.items.colors.map(ele => {
                i++;
                return (
                    <button key={ele.toString()} style={{backgroundColor: ele, color: 'white'}}>{props.items.labels[i]}</button>
                )
            })}
        </div>
    )
}

export default Buttons;