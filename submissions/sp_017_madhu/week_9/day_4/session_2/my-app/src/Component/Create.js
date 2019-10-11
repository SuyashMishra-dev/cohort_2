import React from "react";

export default class Create extends React.Component{

    constructor(props) {
      super(props);
      this.state = {
           priority:'',
            name:'',
            order:'',
            emailid:'',
            contact:'',
            issue:'',
            resolution:'',
            arr:[],
            };
    }
  
    handleChange = (event) =>{
      this.setState({[event.target.name]: event.target.value});
    }
  
    handleSubmit = (event) => {
        var details={...this.state};
        delete details.arr;
        this.setState({
            arr : [...this.state.arr]
        })
        alert('A name was submitted: ' + this.state.name);
        alert('Order Number: ' + this.state.order);
        alert('Email id: ' + this.state.emailid);
        alert('Contact Number: ' + this.state.contact);
        alert('Issue Description: ' + this.state.issue);
        alert('Resolution Deadline: ' + this.state.resolution);
        event.preventDefault();
        
    }   
  
    render() {
      console.log(this.state)
      return (
          <div className="row">
              <div className="col-md-3"></div>
        <div className="text-left col-md-6">
        <form onSubmit={this.handleSubmit}>
         
            <h1>Enter The Details:-</h1>
            <br />
            Issue Type:
            <input type='text' name='name' onChange={(e)=>this.handleChange(e)} value={this.state.name} placeholder='username' />
            <br />
            Order Number:
            <input type='text' name='order' onChange={(e)=>this.handleChange(e)} value={this.state.age} placeholder='Order Number' />
            <br />
            Email ID:
            <input type='text' name='emailid' onChange={(e)=>this.handleChange(e)} value={this.state.emailid} placeholder='Email ID' />
            <br />

            Contact Number:
            <input type='number' name='contact' onChange={(e)=>this.handleChange(e)} value={this.state.contact} placeholder='password' />
            <br />

            Issue Details:
            <input type='text' name='issue' onChange={(e)=>this.handleChange(e)} value={this.state.issue} placeholder='Issue Details' />
            <br />
            Resolution Deadline:
            <input type='text' name='resolution' onChange={(e)=>this.handleChange(e)} value={this.state.resolution} placeholder='Issue Details' />
            <br />

            Priority:
            <select name='priority' value={this.state.priority} onChange={this.handleChange}>
              <option value="hp">High Priority</option>
              <option value="mp">Mid priority</option>
              <option value="lp">Low Severiaty</option>
              
              </select>
            <br />
             


           
          <input type="submit" value="Submit" />
        </form>

</div>



        </div>
       
      );
    }
}
