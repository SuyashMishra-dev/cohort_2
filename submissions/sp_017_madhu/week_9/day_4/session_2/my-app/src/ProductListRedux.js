import React from 'react';
import './App.css';
// import { Route, Link, BrowserRouter } from "react-router-dom";
// import Home from "./Component/Home";
// import Support from "./Component/Support";
// import Issue from "./Component/Issue";
// import Create from "./Component/Create";
import { addItem } from "./actions/addItem";
import {connect} from "react-redux";

// import {anotherName} from './actions/myactions'

class ProductListRedux extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        issue: "",
        order: "",
        emailId: "",
        contactNumber: "",
        issueDetails: "",
        resolutionDeadline:"",
        priority:"",
      };
    }
    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  
    handleClick = (e) => {
      let obj = {
        issue: this.state.issue,
        order: this.state.order,
        emailId: this.state.emailId,
        contactNumber:this.state.contactNumber,
        issueDetails:this.state.issueDetails,
        resolutionDeadline:this.state.resolutionDeadline,
        priority:this.state.priority,
        creation:this.state.creation,
      };
      e.preventDefault();
      this.props.add(obj);
    };
  
    render() {
      console.log(this.props, "state = ", this.state);
      return (
       
        <div style={{ padding: 100 }}>
       <form>
         <h1 className="mb-5 ">Create a new Incident here!!</h1>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label><strong>Issue Type</strong></label>
      <input type="text" class="form-control" name="issue" value={this.state.issue} onChange={e => {this.handleChange(e);}} placeholder="Issue type" />
    </div>

    <div class="form-group col-md-6">
      <label for="inputEmail4"><strong>Date Of Creation </strong></label>
      <input type="date" class="form-control" name="creation" value={this.state.creation} onChange={e => {this.handleChange(e);}} placeholder="dd/mm/yyy" />
    </div>

    <div class="form-group col-md-6">
      <label for="inputOrder"><strong>Order Number</strong></label>
      <input type="text" class="form-control" name="order" value={this.state.order} onChange={e => {this.handleChange(e);}} placeholder="Order Number"/>
    </div>
  
  <div class="form-group col-md-6">
    <label for="inputAddress"><strong>Email ID</strong></label>
    <input type="text" class="form-control" name="emailId" value={this.state.emailId} onChange={e => {this.handleChange(e);}} placeholder="abc@efg.com"/>
  </div>
  <div class="form-group col-md-6">
    <label for="contactNumber"><strong>Contact Number</strong></label>
    <input type="Number" class="form-control" name="contactNumber" value={this.state.contactNumber} onChange={e =>{this.handleChange(e);}} placeholder="1234567894"/>
  </div>

  <div class="form-group col-md-6">
    <label for="issueDetails"><strong>Issue Details</strong></label>
    <input type="text" class="form-control" name="issueDetails" value={this.state.issueDetails} onChange={e =>{this.handleChange(e);}} placeholder="eg.-customer's issue"/>
  </div>

  <div class="form-group col-md-6">
    <label for="contactNumber"><strong>Resolution Deadline</strong></label>
    <input type="date" class="form-control" name="resolutionDeadline" value={this.state.resolutionDeadline} onChange={e =>{this.handleChange(e);}} placeholder="12-10-2019"/>
  </div>

  <div class="form-group col-md-6">
    <label for="contactNumber"><strong>Priority</strong></label>
    <input type="text" class="form-control" name="priority" value={this.state.priority} onChange={e =>{this.handleChange(e);}} placeholder="Priority"/>
  </div>
  </div> 
  <button type="submit" class="btn btn-primary mb-5" onClick={(e) => {this.handleClick(e);}}>Submit</button>
</form>
  {this.props.orderList.map(item => {
    return (
      <div>
        <div class="card text-white bg-success mb-3" key={item.itemOrder}>
          <div class="card-header bg-dark text-light"><h2>Issue Type :- {`${item.itemIssue}`}</h2></div>
            <div class="card-body">
            <h5 class="card-title ">Issue Creation Date :- {`${item.itemCreation}`}</h5>

              <h5 class="card-title ">Order Number :- {`${item.itemOrder}`}</h5>
              <h5 class="card-title">Email ID :- {`${item.itemEmailId}`}</h5>
              <h5 class="card-title">Conatact Number :- +91{`${item.itemContactNumber}`}</h5>
              <p class="card-text">Issue Details :- {`${item.itemIssueDetails}`}</p>
              <h3 class="card-text text-danger">Resolution Deadline :-{`${item.itemResolutionDeadline}`}</h3>
              <h3 class="card-text text-dark">Priority :-{`${item.itemPriority}`}</h3>
            </div>
          </div>
        </div>
              // </div>
            );
          })}
          </div>
       
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
      orderList: state.orderList
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      add: item => dispatch(addItem(item))
    };
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(ProductListRedux);
  