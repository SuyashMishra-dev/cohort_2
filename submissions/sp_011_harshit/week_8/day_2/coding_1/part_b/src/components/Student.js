import React from 'react'
import Display from './Display'
let display = '';

class Student extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            semester: [1, 2, 3, 4, 5, 6, 7, 8],
            branch: ["CSE", "MECH", "ELEC"],
            name: '',
            age: 0,
            dob: '',
            semester_no: 0,
            branch_ele: '',
            grade: '',
            badge_no: 0,
            saved: [],
            flag:false
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            saved: [...this.state.saved, this.state],
            flag:true
        })


    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    deleteit = (q) => {
        this.state.saved.splice(q,1)
           this.setState({
               flag:true
           })

        // this.setState({
        //     flag:true,
        //     saved:[newarr]
        // })
    }



    render() {
        let a = this.state.semester.map(elem => {
            return <option value={elem}> {elem} </option>
        })
        let b = this.state.branch.map(elem => {
            return <option value={elem}>{elem}</option>
        })
        display = this.state.saved.map(elem => {
            return <div>{elem}</div>
        })

        return (
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-xl-1">

                        <div className="row ml-4">
                            <form onSubmit={(e) => this.handleSubmit(e)}>
                                <h3 className="text-left text-baseline ">Name:</h3>
                                <input type="text" value={this.state.name} name="name" onChange={(e) => this.handleChange(e)}></input>
                                <h3 className="text-left">Age:</h3>
                                <input type="number" value={this.state.ageChange} name="age" onChange={(e) => this.handleChange(e)}></input>
                                <h3 className="text-left">Date of birth</h3>
                                <input type="text" value={this.state.dob} name="dob" onChange={(e) => this.handleChange(e)}></input>
                                <h3 className="text-left">Semester</h3>
                                <select value={this.state.semester_no} name="semester_no" onChange={(e) => this.handleChange(e)}>{a}</select>
                                <h3>Branch</h3>
                                <select value={this.state.branch_ele} name="branch_ele" onChange={(e) => this.handleChange(e)}>{b}</select>
                                <h3>Semester</h3>
                                <input type="text" value={this.state.semester_no} name="semester_no" onChange={(e) => this.handleChange(e)}></input>
                                <h3>Badge</h3>
                                <input type="number" value={this.state.badge_no} name="badge_no" onChange={(e) => this.handleChange(e)}></input>
                                <br></br>
                                <input type="submit" value="Feed" />
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-2 offset-2">
                        {this.state.flag ? (
                            this.state.saved.map((elem,index) => {
                                return <Display arr={elem} index={index} fun={this.deleteit} />
                            })) : (<div>h11</div>)}


                    </div>
                </div>

            </div>

        )
    }
}
export default Student;
