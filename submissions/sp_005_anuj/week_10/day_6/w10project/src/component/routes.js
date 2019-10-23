import React from "react";
import { Route } from "react-router-dom";
import Create from "./create.js";
import Show from "./show.js";
import Home from "./Home.js";
import Details from "./Details";
const Routes=()=>{
    return (
        <div>
        <Route path="/create" component={Create}/>
        <Route path="/show" component={Show}/>
        <Route path='/' exact component={Home}/>
        <Route path='/details/:id' render={props => <Details {...props} />} />
            
        </div>
    )
}
export default Routes;