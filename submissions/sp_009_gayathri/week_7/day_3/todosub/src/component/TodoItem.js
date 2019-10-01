import React from 'react';
import '../App.css';
import styles from './todolist.css'
import Task from './Task'




class TodoItem extends React.Component {
   
   render(){
    return(
             <div className="TodoItem">
                {this.props.tasksTodo.map((todo, index) => {
                    return(
                        <Task 
                        index={index}                        
                          todo={todo} 
                          handleClick={this.props.handleClick}                   
                        />
                     )
                }
                )
                }

               
            </div>
           
        
    );
}
}

export default TodoItem;