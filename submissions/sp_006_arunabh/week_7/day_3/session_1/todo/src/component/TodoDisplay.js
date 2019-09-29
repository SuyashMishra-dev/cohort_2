import React from 'react';
import './Styles.css';

class TodoDisplay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tick: this.props.content.done,
            delTodo: []
        }
    }
    handleClick = () => {
        this.setState(
            {
                tick: !this.state.tick
            }
        )
        if(this.state.tick === false) {
            this.state.delTodo.push(this.props.content)
        }
    }
    render(){
        //console.log(this.state.delTodo)
        if(this.state.tick === false){
            return(
                <div>
                    <input type = "checkbox" value = {this.props.content.index} checked = {this.state.tick} onChange = {this.handleClick}/>
                    <p>{this.props.content.value}</p>
                </div>
            )
        }
        else {
            return(
                <div className = "deleted">
                    <input type = "checkbox" value = {this.props.content.index} checked = {this.state.tick} onChange = {this.handleClick}/>
                    <p>{this.props.content.value}</p>
                </div>
            )
        }
    }
} 

export default TodoDisplay;