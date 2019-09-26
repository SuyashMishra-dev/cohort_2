import React from 'react';
import { throwStatement } from '@babel/types';
//import UserDetail from './userDetail';
var Student=[];
// const UserDetail= props =>{
//     return (<div style= {{"border":"2px solid black"}}>
//         <div>Name::{props.name}</div>
//         <div>Age :{props.age}</div>
//         <div>Date of birth:{props.dob}</div>
//         <div>Semester :{props.semsester}</div>
//         <div>branch :{props.branch}</div>
//         <div> marks:{props.marks}</div>
//         <div> badge No:{props.badgeno}</div>
//          <button onClick={()=>delteItem(props.name)}>Delete</button> 
//     </div>);
// };
class UserDetails extends React.Component{
    constructor(props){
        super(props);
      this.state={
          item:props,
          myArr:props.arr,
          status:props.staus,
          update:props.update,
          Student:[]
      }
    //  this.delteItem=this.delteItem.bind(this)
    }
   
    render(){
        console.log(this.state.status)
        console.log(this.state.update)
        return(
            <div style= {{"border":"2px solid black"}}>
              <div>Name::{this.state.item.name}</div>
             <div>Age :{this.state.item.age}</div>
             <div>Date of birth:{this.state.item.dob}</div>
             <div>Semester :{this.state.item.semsester}</div>
             <div>branch :{this.state.item.branch}</div>        
             <div> marks:{this.state.item.marks}</div>
             <div> badge No:{this.state.item.badgeno}</div>
             <button onClick={()=>this.props.del(this.props.index)}>Delete</button>
              {/* <div>{Student.map((item)=>{return<UserDetail {...item} arr={Student} />})}</div>  */}
              {/* <div>{this.state.update?Student.map((item)=>{return<UserDetails {...item} />}):"null"}</div>  */}
              {/* <StudentForm staus={this.state.status} /> */}
    </div> 
        );
    }
    
}
class StudentForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
         name:"",
         age:"",
         dob:"",
         semsester:"",
         branch:"",
         marks:"",
         badgeno:"",
         status:false,
         update:false,
         
       }
       this.handleChange=this.handleChange.bind(this);
       this.handleSubmit=this.handleSubmit.bind(this);
       this.delteItem=this.delteItem.bind(this);
    }
    delteItem=(val)=>{
        this.setState({
         update:true,
        })
        console.log("this is clicked",val);
        Student.pop(val);
        console.log(Student);
    }
    handleChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value,
           
        })
        
    }
    handleSubmit =(event)=>{
        this.setState({
            status:true,
            newstatus:true
        })
       // console.log("button clicked");
         Student.push(this.state);
         event.preventDefault();
    }
render(){
   console.log(this.state.status)
   console.log(this.state.update)
    return(
        <div>
            <div>......Student Details.....</div>
            <div>
            <form onSubmit={this.handleSubmit}>
              <label>Fill The Details</label>
              <br>
              </br>
              <input type='text' name='name' onChange={(e)=>this.handleChange(e)} value={this.state.name} placeholder='Name' />
              <input type='number' name='age' onChange={(e)=>this.handleChange(e)} value={this.state.age} placeholder='Age' />
              <label>DOB</label>
              <input type='date' name='dob' onChange={(e)=>this.handleChange(e)} />
              <label >Semester</label>
              <select name='semsester' onChange={(e)=>this.handleChange(e)}>
                  <option>...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
              </select>
              <input type='text' name='branch' placeholder='Branch' onChange={(e)=>this.handleChange(e)}></input>
              <input type='text' name='marks' placeholder='Semester Grades' onChange={(e)=>this.handleChange(e)}></input>
              <input type='text' name='badgeno' placeholder='Badge no' onChange={(e)=>this.handleChange(e)}></input>
              <div>
                  <button>Submit</button>
              </div>
            </form>
            </div>
            <div>{this.state.status?Student.map((item,index)=>{return<UserDetails {...item}  index={index} del={this.delteItem} />}):"null"}</div> 
             {/* <div>{this.state.status?Student.map((item)=>{return<UserDetails {...item}  />}):"null"}</div> 
             <div>{this.state.update?this.state.Student.map((item)=>{return<UserDetails {...item} />}):"null"}</div>  */}
        </div>
       
    );
}
}
export default StudentForm;