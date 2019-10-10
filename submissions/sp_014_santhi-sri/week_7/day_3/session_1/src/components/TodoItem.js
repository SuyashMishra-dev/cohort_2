import React from 'react'
import './todo.css'


const TodoItem = (props) => {
  return (
    <div>
      {props.data.map((element, index) => {
        let decoration = ''
        if (element.isDone) {
          decoration = { textDecoration: 'line-through', color: "red" }
        }
        else {
          decoration = { textDecoration: 'none' ,color:"green"}
        }
        return (
          <div key={element.name} >
            <ul className="list-group list-group-horizontal w-5 ">
              <li className="list-group-item bg-light"><span><input type="checkbox" onChange={(e) =>
                props.checkDone(e, index)} checked={element.isDone} ></input></span></li>
              <li className="list-group-item"><span><p style={decoration}>{element.name}</p></span></li>
              <li className="list-group-item"><span ><button className="btn btn-primary" onClick={(e) =>
                props.removeTodo(e, index)}  >x</button></span></li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}
export default TodoItem