import React from 'react';
const Todo = (props) => {
    return(
        <div>
            {props.data.map((ele,i) => {
            let decoration = '';
            if(ele.isFinished) {
                decoration = { textDecoration: 'line-through' }
            }
            else {
                decoration = { textDecoration: 'none' }
            }
            return(
                <div className = "bg-dark offset-4 size" >
                    <div key = {ele.items} className = "row mt-3">
                        <input className = "col-1 mt-3 ml-2" type = "checkbox" onChange = {(e) => props.changefunc(e,i)} checked = {ele.isFinished}></input>
                        <p  className = "col-5 mt-2 text-light" style = {decoration}>{ele.item}</p>
                        <button className=" col-2 offset-3 float-right btn btn-danger" onClick = {(e) => props.removefunc(e,i)}>Remove</button>
                    </div>
                </div>
            )})}   
        </div>
    )
}
export default Todo;