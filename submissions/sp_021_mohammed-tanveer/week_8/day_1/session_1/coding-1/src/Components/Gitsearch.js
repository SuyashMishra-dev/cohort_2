import React from 'react';

class Gitsearch extends React.Components{
    constructor(props){
        super(props);
        this.state = {
            userInput : '',
        }
    }

    getInput = (event) => this.setState({[event.target.name] : event.target.value})

    render(){
        return (
        <div>
            <input type="text" placeholder="Enter Git Name" onChange={this.getInput}  />
            <button>Search User</button>
        </div>
        )
    }
}

export default Gitsearch;