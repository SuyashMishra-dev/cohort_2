import React from 'react';
import Todoprint from './Todoprint.js'
export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:'',
            todo:[]

        }

    }
    handleNameChange = (e) =>
    {
            this.setState({

                value:e.target.value

            })
            //console.log(`from state${this.state.value}`)
    } 
    handleClick =()=>
    {
        this.state.todo.push(this.state.value)
        console.log(this.state.todo)
    }

    render() {
        
        return (
            <div>
                <input onChange={(e) => this.handleNameChange(e)} value={this.state.value} type="text" />
                <button onClick={()=>this.handleClick()}>Click</button>
                <Todoprint items={this.state}/>
            </div>
        )
    }
}   
    


    
