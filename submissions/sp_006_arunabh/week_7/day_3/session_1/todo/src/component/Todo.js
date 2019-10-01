import React,{Component} from 'react';
import TodoDisplay from './TodoDisplay';

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoItem: "",
            activeList: [],

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleChange = (event) => {
        this.setState({
            todoItem: event.target.value,
        });
    }
    handleAdd = () => {
        this.state.activeList.push({
            index: this.state.activeList.length+1,
            value: this.state.todoItem, 
            done: false
        })
        this.setState(
            this.state
        );
       // console.log(this.state.activeList);
    }
    render(){
        const items = this.state.activeList.map(el => <TodoDisplay key={el.index} content={el} />)
        return(
            <div>
                <input type="text" value={this.state.todoItem} onChange={event => {this.handleChange(event)}}></input>
                <button onClick = {() => this.handleAdd()}>Add Todo Item</button>
                {items}
            </div>
        )
    }
}