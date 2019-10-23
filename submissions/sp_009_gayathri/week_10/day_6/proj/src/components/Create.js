import React, { Component } from 'react'

export default class CreatePage extends Component {
    render() {
        return (
        
    <form>
  <div class="form-row">
    <div class="form-group col-md-4">
    <hr />
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" />
    </div>
    
    <div class="form-group col-md-4">
      <label for="country">Country</label>
      <select id="country" class="form-control">
        <option selected>Playing for nation...</option>
        <option>India </option>
        <option>England</option>
        <option>New Zealand</option>
        <option> Australia</option>
        <option> Zimbabwe</option>
        <option>SouthAfrica</option>
        <option> Srilanka</option>
        <option>Bangaladesh</option>
        <option> West Indies</option>
        <option>Pakistan</option>
        <option> Ireland</option>
      </select>
    </div>
   
   </div>
  
  <div class="form-group col-md-4">
    <label for="twenty">T20Score</label>
    <input type="number" class="form-control" id="twenty" />
  </div>
  <div class="form-group col-md-4">
    <label for="odi">ODIScore</label>
    <input type="number" class="form-control" id="odi" />
  </div>
  <div class="form-group col-md-4">
    <label for="twenty">Test Score</label>
    <input type="number" class="form-control" id="testscore" />
  </div>  

  
  <button type="submit" class="btn btn-primary">Add in</button>
</form>
            
             
            
        )
    }
}
