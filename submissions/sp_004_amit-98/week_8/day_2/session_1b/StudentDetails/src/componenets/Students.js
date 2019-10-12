import React, { Component } from 'react'
var Studentdata=[];
var a=JSON.parse(localStorage.getItem("studentData"));
if(a===null){}
else{
   Studentdata=[...a];
}
class Students extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id:0,
         name:'',
         age:'',
         semester:'',
         department:'',
         marks:'',
         badgeNo:''
      }
    }
    handleChange=(event)=>{
        event.preventDefault();
         this.setState({
             [event.target.name]:event.target.value
            });
     }
     handleSubmit=(event)=>{
        event.preventDefault();
        Studentdata.push(this.state)  
        localStorage.setItem("studentData",JSON.stringify(Studentdata));
     }
    
  render() {

    return (
      <div style={{marginLeft:"600px",marginTop:"100px"}}>
       <form onSubmit={this.handleSubmit}>
       <div className="form-group">
            <label htmlFor="id">ID</label>
            <input name="id" type="number" className="form-control w-25" value={this.state.id} onChange={(e)=>this.handleChange(e)}/>
         </div>
         <div className="form-group">
            <label htmlFor="name">Name</label>
            <input name="name" type="text" className="form-control w-25" value={this.state.name} onChange={(e)=>this.handleChange(e)}/>
         </div>
         <div className="form-group">
            <label htmlFor="age">Age</label>
            <input name="age" type="text" className="form-control w-25" value={this.state.age} onChange={(e)=>this.handleChange(e)}/>
        </div>
        <div className="form-group">
            <label htmlFor="dob">Semester</label>
            <select className="form-control w-25" name="semester" value={this.state.semester} onChange={(e)=>this.handleChange(e)}>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
                <option value="VI">VI</option>
                <option value="VII">VII</option>
                <option value="VIII">VIII</option>
            </select>         
      </div>
      <div className="form-group">
            <label htmlFor="dob">Department</label>
            <select className="form-control w-25" name="department" value={this.state.department} onChange={(e)=>this.handleChange(e)}>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EE">EE</option>
                <option value="ME">ME</option>
                <option value="CE">CE</option>
                <option value="IT">IT</option>
                <option value="ME">ME</option>
                <option value="EEE">EEE</option>
            </select>         
      </div>
      <div className="form-group">
            <label htmlFor="name">Semester Marks/Grade</label>
            <input type="text" className="form-control w-25" name="marks" value={this.state.marks} onChange={(e)=>this.handleChange(e)}/>
         </div>
         <div className="form-group">
            <label htmlFor="name">Badge Numbers</label>
            <input type="text" className="form-control w-25" name="badgeNo" value={this.state.badgeNo} onChange={(e)=>this.handleChange(e)}/>
         </div>

           <button type="submit" className="btn btn-primary w-25">Submit</button>
      </form>
      </div>
    )
  }
}

export default Students;
