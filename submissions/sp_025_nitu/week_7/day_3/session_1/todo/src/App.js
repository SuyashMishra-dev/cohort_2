import React from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './items.js';

class App extends React.Component{
  constructor(){
  super();
  this.state={
    value: '',
    data: []
  }
  }
  handleInput=(e)=>{
    e.preventDefault();
    this.setState({value:e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({data:[...this.state.data,{name:this.state.value,isFinished:false}] ,value:''});
    console.log(this.state)
  }
  changestatus =(id)=>{
    let temp =this.state.data.filter((ele,i)=>{
      if(id == i){
        ele.isFinished=!ele.isFinished;
      }
      return ele;
    })
    this.setState({data:temp})
  }
  removeitem=(id)=>{
    let temp=this.state.data.filter((ele,i) =>i!=id );
    this.setState({data:temp})
  }
  render(){
    return(
      
    <div>
      <h1 className="bg-primary w-50 ml-5 mt-5 text-center card"> TODO LIST</h1>
      <form onSubmit={this.handleSubmit} className="ml-5 " >
        <input className="form-control w-25"value={this.state.value} onChange={this.handleInput}></input><br></br>
        <button type='submit' className="bg-success form-control w-25">Add</button>
      </form>
      <Item data={this.state.data} changeFunc={(e,i)=> this.changestatus(i)} removeFunc={(e,i) => this.removeitem(i  )} />
    </div>
    )
  }
}

export default App;