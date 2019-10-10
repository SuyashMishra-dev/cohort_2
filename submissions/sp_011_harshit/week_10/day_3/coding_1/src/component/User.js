import React from "react"
import Login from './Login'
import Register from './Register'
import {BrowserRouter,Route,Link} from "react-router-dom"

const User=()=>{
    return(
        <BrowserRouter>
                <div style={{width:"20px",marginLeft:"500PX",marginTop:"50PX"}}>
                <Link to="/">Login</Link>
                <Link to="/register">Register</Link>
            </div>
            <div style={{width:"20px",marginLeft:"500PX",marginTop:"50PX"}}>
            <Route path="/" exact render={()=><Login/> }/>
            <Route path="/register" render={()=><Register/> }/>
            </div>
        
        </BrowserRouter>
            
    )
    
}
export default User