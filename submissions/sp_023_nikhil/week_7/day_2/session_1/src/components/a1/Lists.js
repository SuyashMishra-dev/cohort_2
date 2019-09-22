import React from 'react';

const Lists = (props) => {
    let display = props.name.map(el => (<li>{el}</li>))
    let heading = props.head
    return(
        <div style={{marginLeft:"550px"}}>
            <h2>{heading}</h2>
            <ul>{display}</ul>

        </div>
    )
}
export default Lists