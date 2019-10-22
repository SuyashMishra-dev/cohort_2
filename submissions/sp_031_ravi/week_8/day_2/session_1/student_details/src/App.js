import React,{Component} from 'react';

import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Link
  } from "react-router-dom";
import Table from './components/Table'
let details = []
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      name:"",
      age:'',
      dob:'',
      sem:'',
      branch:'',
      grades:'',
      badge_no:''
    }
  }

  handleChange=(event)=>{
    event.preventDefault();
     this.setState({
         [event.target.name] :event.target.value
        });
 }

  handleSubmit=(event)=>{
    event.preventDefault();
    var obj = {
      name:this.state.name,
      age:this.state.age,
      dob:this.state.dob,
      sem:this.state.sem,
      branch:this.state.branch,
      grades:this.state.grades,
      badge_no:this.state.badge_no
    }
    details.push(obj);
    localStorage.setItem('Details',JSON.stringify(details))
    console.log(this.state)
  }

  render(){ 
    return(
		<Router>
			<div style={{marginLeft:"230px",marginTop:"10px"}}>
				<form onSubmit={this.handleSubmit}>
					<h6 style={{textAlign:'center'}}>Name</h6>
					<input type="text" className="form-control w-40 mb-2 mr-5 col-3" style={{textAlign:'center',marginLeft:'420px'}} required name="name" value={this.state.name} onChange={(e)=>this.handleChange(e)}></input>
					<h6 style={{textAlign:'center'}}>Age</h6>
					<input type="text" className="form-control col-3 mb-2" style={{textAlign:'center',marginLeft:'420px'}} required name="age" value={this.state.age} placeholder="" onChange={(e)=>this.handleChange(e)}></input>
					<h6 style={{textAlign:'center'}}>Date of Birth</h6>
					<input type="text" className="form-control w-60 mb-2 ml-8 col-3" style={{textAlign:'center',marginLeft:'420px'}}  required name="dob" value={this.state.dob} placeholder="" onChange={(e)=>this.handleChange(e)}></input>
					<h6 style={{textAlign:'center'}}>Semester</h6>
					<input type="text" className="form-control w-40 mb-2 mr-5 col-3" style={{textAlign:'center',marginLeft:'420px'}} required name="sem" value={this.state.sem} placeholder="" onChange={(e)=>this.handleChange(e)}></input>
					<h6 style={{textAlign:'center'}}>Branch</h6>
					<input type="text" className="form-control w-40 mb-2 mr-5 col-3" style={{textAlign:'center',marginLeft:'420px'}} required name="branch" value={this.state.branch} placeholder="" onChange={(e)=>this.handleChange(e)}></input>
					<h6 style={{textAlign:'center'}}>Grades</h6>
					<input type="text" className="form-control w-40 mb-2 mr-5 col-3" style={{textAlign:'center',marginLeft:'420px'}} required name="grades" value={this.state.grades} placeholder="" onChange={(e)=>this.handleChange(e)}></input>
					<h6 style={{textAlign:'center'}}>Badge Number</h6>
					<input type="text" className="form-control w-40 mb-2 mr-5 col-3" style={{textAlign:'center',marginLeft:'420px'}} required name="badge_no" value={this.state.badge_no} placeholder="" onChange={(e)=>this.handleChange(e)}></input>
					<button className="btn btn-secondary w-40 " style={{marginLeft:'530px'}} >Submit</button>
				</form> 
				<br/>
				<Link to='/table'><button className="btn btn-secondary w-40 " style={{marginLeft:'530px'}} >View table</button></Link>
			</div>

			<Route path='/table' exact component={Table}/>
		</Router>
    )
  }
}

export default App;
