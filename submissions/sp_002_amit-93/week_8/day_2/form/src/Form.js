import React, { Component } from 'react';
import './Form.css'



class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullname: "enter your name",
            age: "Age",
            birth: "Date of Birth",
            semesterNo: "Number",
            branch: "Branch Name",
            semester:"",
            badge:"Enter Badage No."
        }
    }

    
    handelAll = (event) => {
              this.setState ({[event.target.name] :event.target.value})
    }

    handelsubmit = (event) => {
        
        alert(JSON.stringify(this.state))
        event.preventDefault();
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handelsubmit}>

                    <label>Name</label> <br />
                    <input type="text" name="fullname" value={this.state.fullname}
                        onChange={this.handelAll} /> <br />

                    <label>Age</label><br />
                    <input type="text" name="age" value={this.state.age}
                        onChange={this.handelAll} /> <br />

                    <label>Date of Birth</label><br />
                    <input type="text" name="birth" value={this.state.birth}
                        onChange={this.handelAll} /> <br />

                    <label>Semester(1-8)</label> <br/>
                    <input type="text" name="semesterNo" value={this.state.semesterNo}
                            onChange={this.handelAll} /> <br/>   

                    <label>Branch</label><br />
                    <input type="text"  name="branch" value={this.state.branch}
                        onChange={this.handelAll} /> <br />

                    <label>Semester Grades</label> <br/>
                    <input type="text" name="semester" value={this.state.semester}   
                    onChange={this.handelAll} /> <br/>

                    <label>Badge No</label><br />
                    <input type="text"  name="badge" value={this.state.badge}
                        onChange={this.handelAll} /> <br />

                    <input type="submit" value="send" />
                </form>
            </div>
        );
    }
}

export default Form;