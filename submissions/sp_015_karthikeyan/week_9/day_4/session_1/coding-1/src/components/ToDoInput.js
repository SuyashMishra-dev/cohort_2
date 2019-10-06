import React from 'react';

import { connect } from 'react-redux';
import { addToDoAction } from '../redux/todoStore'

class ToDoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: ''
        }
    }

    handleInput = (e) => {
        this.setState({ val: e.target.value })
    }

    render() {
        console.log('To do input called', this.props)
        return (
            <div>
                <input type='text' value={this.state.val} onChange={e => this.handleInput(e)} ></input>
                <button onClick={() => this.props.handleSubmit(this.state.val)}>Add ToDo</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        handleSubmit: (content) => {
            dispatch(addToDoAction(content))}
    })
}


export default connect(null, mapDispatchToProps)(ToDoInput);