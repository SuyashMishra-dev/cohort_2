import React, { Component } from 'react';
import {Route} from 'react-router-dom';

export default class NameForm extends React.Component {
    
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.input = React.createRef();
     
    }
  
    handleSubmit(event) {
      console.log(this.input.current.value);
      event.preventDefault();
    }
  
    
  render(){
      return(
         <div>
    <form onSubmit={this.handleSubmit}>
  <div className="form-group">
    <label for="name">Player Name</label>
    <input type="text" class="form-control"  ref={this.input}placeholder="player name" />
   
  </div>
  <div className="form-group">
    <label for="score1">T20_Score</label>
    <input type="number" class="form-control" id="1" placeholder="Score"/>
  </div>

  <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Country
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">India</a>
    <a class="dropdown-item" href="#">Pakistan</a>
    <a class="dropdown-item" href="#">Bangladesh</a>
    <a class="dropdown-item" href="#">China</a>
    <a class="dropdown-item" href="#">Italy</a>
    <a class="dropdown-item" href="#">England</a>
    <a class="dropdown-item" href="#">Russia</a>
    <a class="dropdown-item" href="#">Australia</a>
    <a class="dropdown-item" href="#">Nepal</a>
    <a class="dropdown-item" href="#">Indonesia</a>
  </div>
</div>

  <div className="form-group">
    <label for="score2">ODI_Score</label>
    <input type="number" class="form-control" id="2" placeholder="ODI_Score"/>
  </div>
  <div className="form-group">
    <label for="score3">Test_Score</label>
    <input type="number" class="form-control" id="3" placeholder="Test_Score"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
         </div>
      )
  }

}
  
 