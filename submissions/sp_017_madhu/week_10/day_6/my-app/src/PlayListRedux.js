import React from 'react';
import './App.css';
// import { Route, Link, BrowserRouter } from "react-router-dom";
// import Home from "./Component/Home";
import { addItem } from "./actions/addItem";
import {connect} from "react-redux";

// var dataArr=[];
// var temp=JSON.parse(localStorage.getItem("dataDetails"));
// if(temp === null){

// }
// else{
//   dataArr= [...temp]
// }



class PlayListRedux extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        playerName: "",
        country: "",
        tScore:0,
        odiScore: "",
        
      };
    }
    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  
    handleClick = (e) => {
      let obj = {
        playerName: this.state.playerName,
        country: this.state.country,
        tScore: this.state.tScore,
        odiScore:this.state.odiScore,
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
         <h1 className="mb-5 ">Enter your details here!!</h1>
  <div class="form-row">
    <div class="form-group col-md-8">
      <label><strong>Player Name</strong></label>
      <input type="text" class="form-control" name="playerName" value={this.state.playerName} onChange={e => {this.handleChange(e);}} placeholder="Player Name" />
    </div>
        
    <div class="form-group col-md-8">
      <label for="inputOrder"><strong>Country</strong></label>
    <select name='country' class="form-control" value={this.state.country} onChange={e => {this.handleChange(e);}} placeholder="Country">
            <option country="Afghanistan">Afghanistan</option>
            <option country="Australia">Australia</option>
            <option country="Austria">Austria</option>
            <option country="India">India</option>
          </select>

    </div>
  
  <div class="form-group col-md-8">
    <label for="T20Score"><strong>T20 Score</strong></label>
    <input type="number" class="form-control" name="tScore" value={this.state.tScore} onChange={e => {this.handleChange(e);}} placeholder="T20 Score"/>
  </div>
  <div class="form-group col-md-8">
    <label for="ODI Score"><strong>ODI Score</strong></label>
    <input type="Number" class="form-control" name="odiScore" value={this.state.odiScore} onChange={e =>{this.handleChange(e);}} placeholder="ODI Score"/>
  </div>

  <div class="form-group col-md-8">
    <label for="issueDetails"><strong>Test Score</strong></label>
    <input type="text" class="form-control" name="issueDetails" value={this.state.issueDetails} onChange={e =>{this.handleChange(e);}} placeholder="eg.-customer's issue"/>
  </div>

  </div> 
  <button type="submit" class="btn btn-primary mb-5" onClick={(e) => {this.handleClick(e);}}>Submit</button>
</form>
  {this.props.orderList.map(item => {
    return (
      <div>
        <div class="card text-white bg-secondary mb-3" key={item.itemCountry}>
          <div class="card-header bg-dark text-light"><h2>Player Name :- {`${item.itemPlayerName}`}</h2></div>
            <div class="card-body">
              <h5 class="card-title ">Country :- {`${item.itemCountry}`}</h5>
              <h5 class="card-title ">T20 Score :- {`${item.itemTtScore}`}</h5>
              <h5 class="card-title">ODI Score :- {`${item.itemOdiScore}`}</h5>
              <h5 class="card-title">Test Score:-{`${item.itemContactNumber}`}</h5>
            </div>
          </div>
        </div>
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(PlayListRedux);
  

