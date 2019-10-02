import React from 'react'


const Display = (props) => {
    
    return (
        <div>
            <p>{props.arr.name}</p>
            <button onClick={()=>props.fun(props.index)}>{"x"}</button>
        </div>
    )
}
export default Display;
