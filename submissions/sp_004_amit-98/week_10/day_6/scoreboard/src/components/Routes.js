import React from "react";
import { Route } from "react-router-dom";
import Home from './Home.js'
import Create from "./Create.js";
import Show from "./Show.js";
import ShowPlayers from "./ShowPlayers.js";
import Rank from "./Rank.js";
const Routes=()=>{
    return (
        <>
        <Route path="/" exact component={Home}/>
        <Route path="/create" component={Create}/>
        <Route path="/show1" component={Show}/>
        {/* <Route path="/show2" component={Show2}/>
        <Route path="/show3" component={Show3}/>
        <Route path="/show4" component={Show4}/>
        <Route path="/show5" component={Show5}/> */}
        <Route path="/showPlayes:itemId" render={(props)=><ShowPlayers {...props}/>}/>
        <Route path="/route" component={Rank}/>
        </>
    )
}
export default Routes;