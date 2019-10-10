import React from 'react';
import { connect } from "react-redux";
import { removeTodo, toggleIsDone } from "../redux/todo/todo.actions";


const NotDoneTodo = ({todos,count,removeTodo,toggleIsDone}) => (
  <>
    {todos.length ? 
    todos.filter(todo=>!todo.isDone).map(todo=>(
      <div key={todo.id}>
      <input onChange={()=>toggleIsDone(todo)} type='checkbox' checked={todo.isDone} />
      <label><span className={todo.isDone?'strike':'normal'}>{todo.value}</span></label>
      <button onClick={()=>removeTodo(todo)}>Remove Todo</button>
      </div>
    ))  
      : ''}
  </>
)

const mapStateToProps = ({todo:{todos,count}}) => ({     
    todos, 
    count  
})

const mapDispatchToProps = dispatch =>({ 
  removeTodo : (todo) => dispatch(removeTodo(todo)),
  toggleIsDone : (todo) => dispatch(toggleIsDone(todo))
})

export default connect(mapStateToProps,mapDispatchToProps)(NotDoneTodo);
