import React from 'react';
import DisplayDetails from './DisplayDetails';

class StudentsForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name : '',
            age : '',
            dob : '',
            sem : '',
            branch: '',
            grade : '',
            badge : '',
            students : []
        }
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        let studentDetail = {...this.state};
        delete studentDetail.students;
        this.setState({
            students : [...this.state.students,{...studentDetail}]
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    removeStudent = (index) => {
        let newStudents = [...this.state.students];
        newStudents.splice(index,1);
        this.setState({
            students : [...newStudents]
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8">
                    <form onSubmit={this.handleSubmit} className="form-group">
                        <input name="name" onChange={(e)=>{this.handleChange(e)}} type="text" className="form-control" value={this.state.name} />
                        <input name="age" onChange={(e)=>{this.handleChange(e)}} type="text" className="form-control" value={this.state.age} />
                        <input name="dob" onChange={(e)=>{this.handleChange(e)}} type="text" className="form-control" value={this.state.dob} />
                        <input name="sem" onChange={(e)=>{this.handleChange(e)}} type="text" className="form-control" value={this.state.sem} />
                        <input name="branch" onChange={(e)=>{this.handleChange(e)}} type="text" className="form-control" value={this.state.branch} />
                        <input name="grade" onChange={(e)=>{this.handleChange(e)}} type="text" className="form-control" value={this.state.grade} />
                        <input name="badge" onChange={(e)=>{this.handleChange(e)}} type="text" className="form-control" value={this.state.badge} />
                        <input type="submit" value="submit" />
                    </form>
                </div>
                <div className="col-md-4">
                    {this.state.students.map((el,i)=>(<DisplayDetails remove={()=>this.removeStudent(i)} item={el} key={i+'#'} />))}
                </div>
            </div>
        )
    }
}

export default StudentsForm;