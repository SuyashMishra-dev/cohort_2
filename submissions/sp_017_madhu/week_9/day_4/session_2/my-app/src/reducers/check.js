<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Issue Type</label>
      <input type="text" class="form-control" name="issue" value={this.state.issue} onChange={e => {this.handleChange(e);}} placeholder="Email" />
    </div>
    <div class="form-group col-md-6">
      <label for="inputOrder">Order Number</label>
      <input type="text" class="form-control" name="order" value={this.state.order} onChange={e => {this.handleChange(e);}} placeholder="Order Number"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Email ID</label>
    <input type="text" class="form-control" name="emailId" value={this.state.emailId} onChange={e => {this.handleChange(e);}} placeholder="abc@efg.com"/>
  </div>
  <div class="form-group">
    <label for="contactNumber">Contact Number</label>
    <input type="Number" class="form-control" name="contactNumber" value={this.state.contactNumber} onChange={e =>{this.handleChange(e);}} placeholder="1234567894"/>
  </div>

  <div class="form-group">
    <label for="issueDetails">Issue Details</label>
    <input type="Number" class="form-control" name="issueDetails" value={this.state.issueDetails} onChange={e =>{this.handleChange(e);}} placeholder="eg.-customer's issue"/>
  </div>

  <div class="form-group">
    <label for="contactNumber">Resolution Deadline</label>
    <input type="date" class="form-control" name="resolutionDeadline" value={this.state.resolutionDeadline} onChange={e =>{this.handleChange(e);}} placeholder="12-10-2019"/>
  </div>

  <div class="form-group">
    <label for="contactNumber">Priority</label>
    <input type="text" class="form-control" name="priority" value={this.state.contactNumber} onChange={e =>{this.handleChange(e);}} placeholder="High Priority"/>
  </div>
   
  <button type="submit" class="btn btn-primary" onClick={() => {this.handleClick();}}>Submit</button>
</form>


