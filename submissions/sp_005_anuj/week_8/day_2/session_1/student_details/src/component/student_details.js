import React from 'react';
class Student_form extends React.Component {
    constructor() {
        super();
        this.state = {
            name        : ' ',
            age         : ' ',
            dob         : ' ',
            semester    : ' ',
            branch      : ' ',
            badge_no    : ' ',
            student     : []
        }
    }
    handleSubmit = (i) => {
        i.preventDefault();
        var student_details = {...this.state};
        delete student_details.student;
        this.setState({
            student : [...this.state.student]
        })
    }
    handleChange = (i) => {
        this.setState({
            [i.target.name] : i.target.value
        })
    }
    remove_student = (index) => {
        var add_student = [...this.state.student];
        add_student.splice(index,1);
        this.setState({
            student : [...add_student]
        })
    }
        render() {
            return (
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <input name = "name" onChange = {(i) => {this.handleChange(i)}} type = "text" value = "{this.state.name}"></input>
                        <input name = "age" onChange = {(i) => {this.handleChange(i)}} type = "text" value = "{this.state.age}"></input>
                        <input name="dob" onChange={(i) => { this.handleChange(i) }} type="text" value="{this.state.dob}"></input>
                        <input name="branch" onChange={(i) => { this.handleChange(i) }} type="text" value="{this.state.semester}"></input>
                        <input name="badge_no" onChange={(i) => { this.handleChange(i) }} type="text" value="{this.state.badge_no}"></input>
                    </form>
                </div>
            );
        }
    }
export default Student_form;
