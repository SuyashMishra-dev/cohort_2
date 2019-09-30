import React from 'react';
class Task extends React.Component{
    render(){
        return (
            <div className="Tasks">               
                 
                  <span style={{ textDecoration:this.props.todo.taskdone ? 'line-through':'none'}}>
                          {this.props.todo.value}  </span>
                          <button onClick={this.props.handleClick}> {this.props.todo.taskdone ? 'Remove':'Done'} </button>                 
                </div>         
        )
    }
}


export default Task;