import React from 'react'

class Table extends React.Component{
    constructor(props){
        super(props);
        let array = localStorage.getItem("Details")
        let details = JSON.parse(array)
        this.state={
            detail : details
        }
    }
    render(){
        return(
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Date of Birth</th>
                        <th scope="col">Semester</th>
                        <th scope="col">Branch</th>     
                        <th scope="col">Grades</th>
                        <th scope="col">Badge Number</th>
                    </tr>
                </thead>
            {this.state.detail.map(e =>{
                return(
                    <tbody>
                        <tr>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>{e.dob}</td>
                            <td>{e.sem}</td>
                            <td>{e.branch}</td>
                            <td>{e.grades}</td>
                            <td>{e.badge_no}</td>
                        </tr>
                    </tbody>
                    
                )
            })}
         
            </table>   
        )
    }
}

export default Table;