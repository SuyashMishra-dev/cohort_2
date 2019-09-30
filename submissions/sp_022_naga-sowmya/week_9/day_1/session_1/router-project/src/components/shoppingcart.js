import React from 'react'
import { Route, Redirect } from "react-router-dom";

const NotLoggedIn = props => {
    return(
        <div>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={props.func}>Sign in</button>
            </form>
        </div>
    )
}

const LoggedIn = props => {
    return (
        <div>
            <h1>Congratulation! You Have Been Logged In Successfully</h1>
            <h3 className="text-danger">For More Information on price of the Products, Go To Products And Check</h3>
            <p>iPads</p><button type="submit" className="btn btn-primary" onClick={()=> ipads()}>Add To Cart</button><h2 id="ipads"></h2>
            <p>iPhones</p><button type="submit" className="btn btn-primary" onClick={()=> iphones()}>Add To Cart</button><h2 id="iphones"></h2>
            <p>Watches</p><button type="submit" className="btn btn-primary" onClick={()=> watches()}>Add To Cart</button><h2 id="watches"></h2>
            <p>Apple Watch Docks</p><button type="submit" className="btn btn-primary" onClick={()=> dock()}> Add To Cart</button><h2 id="dock"></h2>
            <p>Power-Uno Wireless Charger</p><button type="submit" className="btn btn-primary" onClick={()=> power()}>Add To Cart</button><br /><h2 id="power"></h2>
            <button typr="submit" className="btn btn-primary mt-3" onClick={props.func} >Sign out</button>
        </div>
    )
}

function ipads() {
    document.getElementById("ipads").innerHTML = "You Added Successfully To Your Cart";
}

function iphones() {
    document.getElementById("iphones").innerHTML = "You Added Successfully To Your Cart";
}

function watches() {
    document.getElementById("watches").innerHTML = "You Added Successfully To Your Cart";
}

function dock() {
    document.getElementById("dock").innerHTML = "You Added Successfully To Your Cart";
}

function power() {
    document.getElementById("power").innerHTML = "You Added Successfully To Your Cart";
}


class ShoppingCart extends React.Component {
    constructor(props) {
        super (props);
        this.state ={
            isAuthenticated : false,
        };
    }
    fakeAuth = () => {
        this.setState({
            isAuthenticated: !this.state.isAuthenticated
        })
    };
    render() {
        return(
            <div className="container">
                    {/* <h2>Sign in Page</h2><br /> */}
                {!this.state.isAuthenticated ? (
                    <Redirect to ={{ pathname: "/shoppingcart/login"}}/>
                ):(
                    <Redirect to ={{ pathname: "/shoppingcart/dashboard"}}/>
                )}
                <Route path = "/shoppingcart/login"
                render = {() => (
                    <NotLoggedIn func = {() => {
                        this.fakeAuth();
                    }}
                    />
                )}
                />
                <Route path = "/shoppingcart/dashboard"
                render = {() => (
                    <LoggedIn func = {() => {
                        this.fakeAuth();
                    }}
                    />
                )}
                />
            </div>
        )
    }
}

export default ShoppingCart;
