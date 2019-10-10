import React from 'react';
import Todoprint from './Todoprint.js'
export default class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:'',
            todo:[],
            dispflag:false,
            isCheck:false

        }

    }


    // INPUT THE STRING
    handleNameChange = (e) =>
    {
        //console.log(e.target.value)
            this.setState({
                value: e.target.value
            })
            console.log(this.state.value)
    } 


    //CHECKBOX THE ELEMENT WITH STRIKE
    handleCheck = (index) => {

        let newarr = this.state.todo.map((elem, i) => {
            if (index == i) {
                elem.check = !elem.check
            }
            return elem
        })

        this.setState({
            todo: newarr
        })
    }



    //ADD ELEMENT ON ADD BUTTON
    handleClick =()=>
    {
        let obj = {
            val:this.state.value,
            check : false
        }
        this.setState({
            todo:[...this.state.todo,obj ],
            dispflag:true
          
        })  
    
    }

    //DELETE THE ELEMENT
    handleDelete = (delete_val) =>
    {
        console.log(delete_val)
    this.state.todo.splice(delete_val,1)
   
    this.setState({
        dispflag:true
    })
    }

    render() {
        
        return (
            <div>
                 <h3>TODO LIST</h3>
                <input onChange={(e) => this.handleNameChange(e)} value={this.state.value} id="1" type="text" />
                <button className="btn btn-success offset-1" onClick={()=>this.handleClick()} >Add</button>
                {this.state.dispflag ? 
                (<Todoprint items={this.state} check={this.handleCheck} btn={this.handleDelete}/>
                ) :(<h2></h2>)}
            </div>
        )
    }
}   
    


    
