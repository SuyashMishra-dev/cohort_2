import React, { Component } from 'react'
import { Link } from "react-router-dom";

 class Home extends Component {
  render() {
    return (
      
        <div style={{clear:"both",marginTop:"200px"}}>
         <Link to="/create"> <button className="btn btn-primary offset-5">Create</button><img style={{width:"60px",height:"60px"}} src="https://www.freeiconspng.com/uploads/user-add-icon---shine-set-add-new-user-add-user-30.png"></img></Link>
         <Link to="/show1"> <button className="btn btn-danger offset-1">Show</button><img style={{width:"60px",height:"60px"}} src="https://cdn3.iconfinder.com/data/icons/strokeline/128/32_icons-512.png"></img></Link>
        </div>
    )
  }
}
export default Home;

