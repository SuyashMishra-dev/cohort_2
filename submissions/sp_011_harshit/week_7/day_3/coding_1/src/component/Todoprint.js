import React from 'react';
const Todoprint=(props)=>{
    let decoration  
    let list = props.items.todo.map((a, index) => {
        if (a.check == true) {
            decoration = { textDecorationLine: "line-through" }
        }
        else {
            decoration = { textDecorationLine: "none" }
        }
        return (<div className="container row offset-2 mt-4">
            <div className="offset-2">
                <input onChange={() => props.check(index)} type="checkbox"></input>
            </div>
            <div>
                <h3 style={decoration} className="offset-2">
                    {a.val}
                </h3>
            </div>
            <div className="offset-2 ">
                <button className="btn btn-danger" onClick={() => props.btn(index)}>
                    {"Delete Me"}
                </button>
            </div>
        </div>)
    })

    return(
        <div className="App container">
            {/* CALLING THE MAP */}
         {list}
        </div>
    )
}
export default Todoprint;
