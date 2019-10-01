import React from 'react';

function Login (){
return(
    <div>
    <div>
        <form style={{"marginTop":"-100px","marginLeft":"300px"}}>
            <label> Full Name:</label>
            <input type="text"class="form-control w-25" placeholder="Enter Name" /><br></br>
            <label> Email:</label>
            <input type="text" placeholder="Enter Email" class="form-control w-25" /><br></br>
            <lable> Date of Birth:</lable>
            <input type="Date" class="form-control w-25" /><br></br>
            <button type="button" class="btn btn-success w-25">Login</button>

        </form>
    </div>
  </div>

);
}
export default Login;