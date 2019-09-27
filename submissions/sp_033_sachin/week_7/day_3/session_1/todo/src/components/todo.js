import React from 'react';


const Todo = (props) => {
    let lineDecoration = null
    if (props.data.done) {
        lineDecoration = {textDecoration:"line-through"}         
    } else {
        lineDecoration = {textDecoration:"none"}
    }
     
    return (
        <>
        <div>
            <label>
                <input onChange={props.changeCheck} type="checkbox" name="todo" checked={props.data.done}/>
                <span style={lineDecoration}>{props.data.value}</span>
            </label>
            <button onClick={props.remove}>Remove</button>
        </div>        
        </>
    )
}

export default Todo;