import React from 'react';
import { connect } from 'react-redux'
import addTodo from './actions/todoAction'

class TodoList extends React.Component{
    constructor() {
        super();
        this.state={
            text: ""
        }
    }
    getInput = (e) => {
        this.setState({
            text: e
        })
    }
    render() {
        let tsk = this.props.item.list.map((elm) => {
            return(
                <li>{elm}<button onClick={}>X</button></li>
            )
            })
        return(
            <>
                <input type="text" value={this.state.text} onChange={(e) => {this.getInput(e.target.value)}} />
                <button onClick={() =>{this.props.add(this.state.text)}} >Add</button>
                {tsk}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        item: state.addTask
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add : (task) => dispatch(addTodo(task))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (TodoList);

