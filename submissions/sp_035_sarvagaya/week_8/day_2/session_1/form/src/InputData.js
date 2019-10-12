import React from "react";
import DisplayData from "./DisplayData";

let tempArr = [];
var loc = JSON.parse(localStorage.getItem("Details"));
if(loc == null)
{

}
else
{
    tempArr = [...loc];
}

class InputData extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state={
            name: "",
            age: "",
            dob: "",
            sem: "",
            branch: "",
            grade: "",
            badge: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e)
    {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick(evt)
    {
        evt.preventDefault();

        tempArr.push(this.state);
        console.log(tempArr);
        localStorage.setItem("Details" , JSON.stringify(tempArr));

    }

    render()
    {
        return(
            <div>
                <h1>Please Enter Student Details</h1>
                <br />
                <br />
                <label htmlFor="name">Enter Student Name:</label>
                <input type="text" onChange = {this.handleChange} name="name" value = {this.state.name} ></input>
                <br />
                <br />
                <label htmlFor="age">Enter Student Age:</label>
                <input type="text" onChange = {this.handleChange} name="age" value = {this.state.age} ></input>
                <br />
                <br />
                <label htmlFor="dob">Enter Student Date of Birth:</label>
                <input type="date" onChange = {this.handleChange} name = "dob" value = {this.state.dob} ></input>
                <br />
                <br />
                <label htmlFor="semester">Choose Student Semester</label>
                <select onChange = {this.handleChange} name = "sem" value = {this.state.sem} >
                    <option>Choose Sem</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
                <br />
                <br />
                <label htmlFor="branch">Choose Student Branch/Department:</label>
                <select onChange = {this.handleChange} name = "branch" value = {this.state.branch}>
                    <option>Choose Department</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Electronics and Communications">Electronics and Communications</option>
                    <option value="Mechanical">Mechanical</option>
                </select>
                <br />
                <br />
                <label htmlFor="grade">Choose Student Grade</label>
                <select onChange = {this.handleChange} name = "grade" value = {this.state.grade} >
                    <option>Choose Grade</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                </select>
                <br />
                <br />
                <label htmlFor="badge">Enter Badge no.:</label>
                <input type="text" onChange = {this.handleChange} name = "badge" value = {this.state.badge}></input>
                <br />
                <br />
                <button type="submit" onClick = {this.handleClick}>Submit Student Details</button>
                <br />
                <br />
                <div>
                    <br />
                    <div>
                        <DisplayData />
                    </div>
                   
                </div>
            </div>
        )
    }
}
export default InputData;