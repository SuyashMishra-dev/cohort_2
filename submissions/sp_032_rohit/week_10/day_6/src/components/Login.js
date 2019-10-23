import React from 'react';
export default class Login extends React.Component {
  render() {
    return (
      <div className="row m-5">
        
        <div className="col-md-5">
        </div>

        <form>
          <img className="mb-5" src="https://fliinc.net/wp-content/uploads/2017/02/fli-homepage-login-icon.png" width="300px"/>
          <div className="form-group">
            <label for="exampleInputEmail1">
              Email address
            </label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">Use only company email.</small>
          </div>

          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>

          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Remember me</label>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>

          <div className="col-md-1">
          </div>
        </form>

      </div>
    );
  }
}
