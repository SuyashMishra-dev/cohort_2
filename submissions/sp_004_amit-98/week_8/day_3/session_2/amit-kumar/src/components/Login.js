import React from "react";
const Login = () => {
  return (
    <div>
      <form style={{ marginTop: "100px", marginLeft: "700px" }}>

        <div className="container" >
          <label for="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required></input><br></br>

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required></input><br></br>

          <button className="btn btn-primary ml-5" type="submit">Login</button>
          <label>
            <input className="ml-5" type="checkbox" checked="checked" name="remember"></input> Remember me
    </label>
        </div>

        <div className="container">
          <span className="psw ml-3">Forgot <a href="#">password?</a></span>
        </div>
      </form>
    </div>
  );

};
export default Login;