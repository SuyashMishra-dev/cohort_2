import React from 'react';

const Todo = (props) => {
    return (
        <div>
            {props.listData.map((ele, i) => {
                let decor = '';
                if(ele.isCompleted) {
                    decor = {textDecoration: 'line-through'}
                }
                else decor = {textDecoration: 'none'}
                return (
                    <div className="input-group my-3">
                        <div className="input-group-prepend input-group-text">
                            <input type="checkbox" onChange={(e)=>{props.change(e,i)}}  key={i}></input>
                        </div>
                        <li className="list-group-item" style={decor}>{ele.listItem}</li>
                        <button className="btn btn-danger" onClick={(e)=>{props.remove(e,i)}} key={i}>Remove</button>
                    </div>  
                )
            })}
        </div>    
    )
}

export default Todo;