import React from 'react';
const Todoprint=(props)=>{
    return(
        <div className="App">
            {props.items.todo.map(a=>
                <h3>{a}</h3>)}

        </div>
    )
}
export default Todoprint;