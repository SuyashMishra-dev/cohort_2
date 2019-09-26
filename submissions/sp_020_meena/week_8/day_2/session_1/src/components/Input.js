import React from 'react';
import ReactDOM from 'react-dom';
// import  './App.css'

export default class Input extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                name:"",
                age:"",
                dob:"",
                semester:"",
                branch:"",
                semestermarks:"",
                badgeno:"",
            }
    }
    handleChange = (event) =>{
        this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit = (event) =>{
        alert('your favorite flavor is:' + this.state.name);
        alert(this.state.age);
        alert(this.state.dob);
        alert(this.state.branch);
        event.preventDefault();
    }
    render(){
        console.log(this.state);
        return(
            <div>
                <h1>Welcome Please Fill This From</h1>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        NAME:  <input type = "text" name = "name"  placeholder='Username' onChange ={(e) => this.handleChange(e)} value = {this.state.name}></input><br/><br/>
                        AGE:  <input type = "number" name = "age"  placeholder='Age' onChange ={(e) => this.handleChange(e)} value = {this.state.age}></input><br/><br/>
                        DATE OF BIRTH: <input type = "date" name = "dob"  placeholder='DOB' onChange ={(e) => this.handleChange(e)} value = {this.state.dob}></input><br/><br/>
                        SEMESTER: <input type = "text" name = "semester"  placeholder='Semester' onChange = {(e) => this.handleChange(e)} value = {this.state.semester}></input><br/><br/>
                        BRANCH: <select name = "branch" onChange = {(e) => this.handleChange(e)} value = {this.state.branch}>
                                   <option value = " ">Select Branch</option>
                                   <option value = "Electronics">Electronic</option>
                                   <option value = "Electrical">Electrical</option>
                                   <option value = "Computers">Computers</option>
                                   <option value = "Civil">Civil</option>
                             </select><br/><br/>
                        SEMESTER MARKS: <input type = "text" name = "semestermarks"  placeholder='Semestermarks' onChange = {(e) => this.handleChange(e)} value ={this.state.semestermarks}></input><br/><br/>
                        BADGE NO: <input type = "text" name = "badgeno"  placeholder='Badgeno' onChange = {(e) => this.handleChange(e)} value = {this.state.badgeno}></input><br/><br/>
                    </label>
                    <input type = "submit" value = "submit"></input>
                </form>
            </div>

        )
    }
}