import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from './component/Todolist'
import TodoItem from './component/TodoItem'
import Additem from './component/Additem'
import { tsConstructorType } from '@babel/types';

 class App extends React.Component {
    // constructor() {
    //   super();
    //   this.state = {
    //     itms: [],
    //     text: '',
    //   };
    // }

  state = {
    inputValue: "",
    tasksTodo: [
      
  ]  
}


handleChange = (event) => {
  console.log(event.target.value);
  this.setState({inputValue:event.target.value});
}

handleClick=(index)=>{
  console.log("button click");
  const tasksTodo=this.state.tasksTodo;
  tasksTodo[index].taskdone=!tasksTodo[index].taskdone;
  this.setState({tasksTodo});
}

handleSubmit =(event) => {
  event.preventDefault();
  const newTask = {
    value: this.state.inputValue,
    taskdone:false
  };
  const tasksTodo = this.state.tasksTodo;
  tasksTodo.push(newTask);
  this.setState({tasksTodo,inputValue: ' '})
}

  render(){
    return (
      <div className="App">
        <div className="App">
        <h1> To do list </h1>
        <h3> Add tasks to your list </h3>
        <Todolist
        handleChange={this.handleChange}
        inputValue= {this.state.inputValue}
        handleSubmit={this.handleSubmit}
        />
  
       <TodoItem 
       handleClick={this.handleClick}
       tasksTodo ={this.state.tasksTodo}
       />

       <h5>Todos are orgainsational tools</h5>
       
      </div>
       
      </div>
    );
  }
  
  

// componentDidMount = () => {
//   const itms = localStorage.getItem('itms');
//   if (itms){
//     const saveditms =JSON.parse(itms);
//     console.log ('items present', itms);
//     this.setState({ todos: saveditms } )
//   }

//   else {
//     console.log ('No itms');
//   }
// }
 }

export default App;
