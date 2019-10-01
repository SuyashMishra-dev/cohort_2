import React from 'react';
import { thisExpression } from '@babel/types';
// import '../../App.css';

var sem= '1';
var branch="cse";
var grade="a";
var name='';
var age='';
var dob='';
var arr=[];


export default class Data extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
            value: '1',
            value:"cse",
            // grade:"a",
            name:'',
            age:'',
            dob:'',
            arr:[]
            };
    }
  
    handleChange = (event) =>{
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit = (event) => {
        var details={...this.state};
        delete details.arr;
        this.setState({
            arr : [...this.state.arr]
        })

        arr.push(this.state);
        event.preventDefault();
        console.log(arr);
    }
   
  remove_Student=(index)=>{
    var add_details={... this.state.arr};
    add_details.splice(index,1);
    this.setState({
      arr:{...add_details}
    })
  }

  display=(event)=>{

  const items= arr.map(elem => {return <p> {elem}</p>})
  // console.log(items)
  }


      render() {
      console.log(this.state)
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Your Details:-
            <br />
            Name:
            <input type='text' name='name' onChange={(e)=>this.handleChange(e)} value={this.state.name} placeholder='username' />
            <br />
            Age:
            <input type='text' name='age' onChange={(e)=>this.handleChange(e)} value={this.state.age} placeholder='age' />
            <br />
            Date Of Birth:
            <input type='date' name='dob' onChange={(e)=>this.handleChange(e)} value={this.state.dob} placeholder='date of birth' />
            <br />
            Semester:
            <select name='sem' value={this.state.sem} onChange={this.handleChange}>
              <option value="1st">1</option>
              <option value="2nd">2</option>
              <option value="3rd">3</option>
              <option value="4th">4</option>
              <option value="5th">5</option>
              <option value="6th">6</option>
              <option value="7th">7</option>
              <option value="8th">8</option>
            </select>
            <br />

            Branch:
            <select name='branch' value={this.state.branch} onChange={this.handleChange}>
              <option value="cse">Computer Science and Engineering</option>
              <option value="etc">Electronics and Telecomunication</option>
              <option value="civil">Civil Engineering</option>
              <option value="mech">Mechanical Engineering</option>
              <option value="ele">Electrical Engineering</option>
              </select>
            <br />
             Semester grade:
             <select name='grade' value={this.state.grade} onChange={this.handleChange}>
              <option grade="a">A</option>
              <option grade="b">B</option>
              <option grade="c">C</option>
              <option grade="d">D</option>
              <option grade="e">E</option>
              </select>
            <br />


          </label>
          <input type="submit" value="Submit" />
          <input type="submit" value="Display" onClick={()=>this.display()}/>
        </form>
        {/* <div>
          {this.state.items}
          {/* {this.items.age} */}
        {/* </div> */}
        <div>
          <p>{"Name :- "+this.state.name}</p>
          <p>{"Age :- "+this.state.age}</p>
          <p>{"Date of birth :- "+this.state.dob}</p>
          <p>{"Semester :- "+this.state.sem}</p>
          <p>{"Branch :- "+this.state.branch}</p>
          <p>{"Grade :- "+this.state.grade}</p>
          <p>{this.state.items}</p>
        </div>
        </div>
      );
    }
  }
  
 