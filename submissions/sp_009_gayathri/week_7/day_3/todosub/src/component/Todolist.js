import React from 'react';
import '../App.css';
import TodoItem from './TodoItem'


export default class Todolist extends React.Component {
 
    render(){
    return(
        <div>
            <div className="Form">
            
                    <form onSubmit={(event)=>this.props.handleSubmit(event)}> 
                    <input                    
                    onChange={(event) => this.props.handleChange(event)}
                    value={this.props.inputValue}
                     />
                   
                </form>
            </div>
            {/* Hello from Todo inside. */}                     
        </div>
        )
        }
}

