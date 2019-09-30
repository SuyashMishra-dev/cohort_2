import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import TodoList from './todoshow';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
          itemName:"",  
          item:[],
          status:false,
          checkStatus:false
        }
        this.handleChange= this.handleChange.bind(this);
       
    }
    handleChange =(e) =>{
      // console.log("something changing")
      // console.log(e.target.value);
      this.setState({
          [e.target.name]:e.target.value,
      })
    }
    handcheck =(id,val) =>{
      console.log("changed",id,val,this.state.item[id]);
      this.setState(prevSt => {
        const newSt = prevSt.item.map(todo=>{
          console.log(todo.itemName ,this.state.item[id].itemName)
          if(todo===this.state.item[id]){
            console.log("match")
          todo.checkStatus=!todo.checkStatus
          }
          return todo
        })
        return{
          item:newSt,
        }
        
      })
     
    }
    handleSubmit = ()=>{
        console.log("button is clicked");
        this.state.item.push(this.state);
        this.setState({
            status:true
        })
    }
    deleteItem= (idx)=>{
      //console.log(e)
      console.log("this is delete");
      console.log(idx);
      this.state.item.splice(idx,1);
      console.log(this.state.item); 
      this.setState({
        item:this.state.item,
      })
    }
    render(){
        // console.log(this.state.itemName);
           console.log(this.state.item);
     //   console.log(this.state.item)
        return (
            <React.Fragment>
                            <AppBar>
                                    <Toolbar>
                                      Todo List
                                    </Toolbar>
                            </AppBar>
                <div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    <TextField
                     label="Item Name"
                     name="itemName"
                     onChange={this.handleChange}
                     defaultValue=""
                    />
          <br />
          <br />
                <Button variant="contained" color="primary" onClick={this.handleSubmit}>
                Add Item
                </Button>
                </div>
             <br />
             <br />
             <br />
             {/* <TodoList /> */}
             
             {this.state.status?this.state.item.map((i,index)=>{return <TodoList Arr={i} index={index} del={this.deleteItem} chk={this.handcheck} ckhsts={this.state.checkStatus}/>}):"null"}
             
           </React.Fragment>
        );
    }
}
export default App
