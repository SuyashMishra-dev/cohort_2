import React from 'react';
import './App.css';
import Todo from './components/todo'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      todoInputValue : '',
      todos : []
    }
  }

  handleTodoInput = (e) =>{
    e.preventDefault();
    this.setState({
      todoInputValue : e.target.value
    })
  }

  addTodo = () => {
    let newTodoValue = {
      value : this.state.todoInputValue,
      done : false
    };
    
    this.setState({
      todos : [...this.state.todos,newTodoValue]
    }) 
    
  }

  handleCheck = (index) => {
    
    let arr = this.state.todos;
    arr[index].done = (!arr[index].done);
    
    this.setState({
      todos : [...arr] 
    })
  }

  render(){
    
    let todoList = 'Add a Todo'
    let completed = '';
    if (this.state.todos.length !== 0) {
      todoList =  this.state.todos.filter(el=>el.done===false).map((todo,i)=><Todo changeCheck={()=>(this.handleCheck(i))} key={i} data={todo} />)   
      completed =  this.state.todos.filter(el=>el.done===true).map((todo,i)=><Todo changeCheck={()=>(this.handleCheck(i))} key={i} data={todo} />)   

    }    
    return (
      <div className="App">
        <div>
          <button onClick={()=>{this.addTodo()}}>+</button>
          <input type="text" value={this.state.todoInputValue} onChange={(e)=>{this.handleTodoInput(e)}} />
        </div>
        <h3>Incomplete</h3>
        {todoList}
        <h3>Complete</h3>
        {completed}
      </div>
    )
  }
}

export default App;
