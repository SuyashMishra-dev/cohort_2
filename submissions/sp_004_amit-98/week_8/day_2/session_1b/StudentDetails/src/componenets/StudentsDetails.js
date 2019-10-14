import React, { Component } from 'react'

 class StudentsDetails extends Component {
  render() {
    var data=JSON.parse(localStorage.getItem("studentData"));
    console.log(data);
    handleRemove=(id)=>{
      id.preventDefault();
    }
    return (
      <div>
          { 
             data.map((items)=>{
             return(
                 <div style={{float:"left",marginLeft:"80px",marginTop:"40px",textAlign:"center"}} className="card w-25 text-centre">
                  <p style={{fontSize:"25px"}}>Name:{items.name}</p>
                  <p style={{fontSize:"25px"}}>Age:{items.age}</p>
                  <p style={{fontSize:"25px"}}>Semester:{items.semester}</p>
                  <p style={{fontSize:"25px"}}>Marks:{items.marks}</p>
                  <p style={{fontSize:"25px"}}>Department:{items.department}</p>
                  <p style={{fontSize:"25px"}}>Badge No:{items.badgeNo}</p>
                  <button className="btn btn-primary" onClick={()=>this.handleRemove(items.id)}>Remove</button>
                </div>
              
             )
              })    
          }
      </div>
    )
  }
}
export default StudentsDetails;
