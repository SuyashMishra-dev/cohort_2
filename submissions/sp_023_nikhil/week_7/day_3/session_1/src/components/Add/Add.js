import React from 'react';
import List from '../List/List'

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [],
        }
    }

    handleChange(e) {
        this.setState({value: [e.target.value]})
    }
    
    handleClick(e) {
        this.setState({value: e.target.value})
        console.log(this.state.value)
    }
    
    render() {
        
        return (
            <div>
                <input value={this.state.value} onChange={e=>{this.handleChange(e)}} />
                <button onClick={()=>{this.handleClick()}}>Add</button>
                <List new={this.state.value} />
                
            </div>
        )
    }
}
export default Add

// value={this.state.value}