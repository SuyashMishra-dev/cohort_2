import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component {
    constructor() {
        super();

    }

    render() {

        return(
            <div className="container p-5">
                <div className="row">
                    <div className="offeset-md-3 col-md-6">
                        <div className="card">
                            <h5 className="card-header">Login</h5>
                            <div className="card-body">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div>
                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary"><Link to="/" className="btn btn-primary">Sign In</Link></button>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;