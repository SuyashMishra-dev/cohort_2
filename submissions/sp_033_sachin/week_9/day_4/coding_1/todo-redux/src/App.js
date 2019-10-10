import React from 'react';
import { connect } from "react-redux";
import { addTodo, removeTodo, toggleIsDone } from "./redux/todo/todo.actions";

import './App.css'
import NotDoneTodo from './components/NotDoneTodo';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todo : ''
    }
  }

  handleChange = (e) => {
    this.setState({
      todo : e.target.value
    })
  }

  addTodo = () => {
    const {addTodo, count} = this.props;
    const todo = {
      id : count + 1,
      value : this.state.todo,
      isDone : false
    }

    addTodo(todo);

  }
  // todo.isDone?{textDecoration:'line-through'}:{textDecoration:'none'}
  render () {
    const {todos,removeTodo,toggleIsDone} = this.props;
    
    return (
      <div>
        <input type='text' value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.addTodo}>Add Todo</button>
        <hr />
        {todos.length ? 
         todos.map(todo=>(
           <div key={todo.id}>
           <input onChange={()=>toggleIsDone(todo)} type='checkbox' checked={todo.isDone} />
           <label><span className={todo.isDone?'strike':'normal'}>{todo.value}</span></label>
           <button onClick={()=>removeTodo(todo)}>Remove Todo</button>
           </div>
         ))  
           : ''}
          <hr />
          <h1>Not Done</h1>
          <NotDoneTodo />
      </div>
    )
  }

}

const mapStateToProps = ({todo:{todos,count}}) => ({     
    todos, 
    count  
})

const mapDispatchToProps = dispatch =>({
  addTodo : (todo) => dispatch(addTodo(todo)),
  removeTodo : (todo) => dispatch(removeTodo(todo)),
  toggleIsDone : (todo) => dispatch(toggleIsDone(todo))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
