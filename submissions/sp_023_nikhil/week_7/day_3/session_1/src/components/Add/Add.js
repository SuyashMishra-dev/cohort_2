import React from 'react';

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            data: [],
            done: [],
            doneStatus: false,
            vis: false
        };
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    handleClick = () => {
        let arr = this.state.data
        arr.push(this.state.value)
        this.setState({
            data: arr,
            value: ""
        });
    }

    taskComplete = () => {
        if (!this.state.doneStatus) {
            this.setState({ doneStatus: true })
        }
        else {
            this.setState({ doneStatus: false })
        }

    }

    delete = (i) => {
        let arr = this.state.data
        let arr2 = this.state.done
        arr2.push(arr.splice(i,1));
        this.setState({
            data: arr,
            done: arr2
        })
    }

    completedTasks = () => {
        if(!this.state.vis){
            this.setState({
                vis: true
            })
        }
        else{
            this.setState({
                vis: false
            })
        }
    }
    
    render() {
        let list = this.state.data.map((elm, i) => {
            return (
                <li style={{textDecoration: this.state.doneStatus ? "line-through" : ""}} key={i}><input onClick={() => { this.taskComplete() }} type="checkbox" />{elm}<button onClick={() => { this.delete(i) }} >X</button> </li>
                )
            })
            let finished = this.state.done.map((elm, i)=><li key={i}>{elm}</li>)
        return (
            <div>
                <input value={this.state.value} onChange={e => { this.handleChange(e) }} />
                <button onClick={() => { this.handleClick()}}>Add</button>
                <ul>{list}</ul>
                <button onClick={() => { this.completedTasks()}}>Show</button>
                <ul style= {{visibility: this.state.vis ? "" : "hidden"}} >{finished}</ul>
            </div>
        )
    }
}

export default Add