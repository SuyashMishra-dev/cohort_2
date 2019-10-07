import React from 'react';

let  allTodo = []

class Adding extends React.Component{
    constructor(){
        super();
        this.state = {
            name: '',
        }
    }

    inputChange = (event) => {
        event.preventDefault();
        this.setState({name:event.target.value})
    }

    inputSubmit = (event) => {
        event.preventDefault();
        allTodo.push(this.state.name)
    }

    render(){
        
        let allList = allTodo.map(eachTodo => {
            return(
                <li>{eachTodo}</li>
            )
        })
        return(
            <React.Fragment>
                <form onSubmit={this.inputSubmit}>
                    <input type="text" placeholder="Enter the name to add" onChange={this.inputChange} value={this.state.name} /><br/>
                    <button type="submit">Add To Do</button>
                </form>
                <ul>
                    {allList}
                </ul>
            </React.Fragment>
        )
    }
}

export default Adding;