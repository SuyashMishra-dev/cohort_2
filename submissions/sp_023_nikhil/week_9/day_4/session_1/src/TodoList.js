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
        return(
            <>
                <input type="text" value={this.state.text} onChange={(e) => {this.getInput(e.target.value)}} />
                <button onClick={() =>{this.props.add(this.state.text)}} >Add</button>
                {/* {this.props.items.map((elm) => <li>elm</li>)} */}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add : (task) => dispatch(addTodo(task))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (TodoList);

