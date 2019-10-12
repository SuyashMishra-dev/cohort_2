import React from "react";
import { placeholder } from "@babel/types";
import {Link, Router , BrowserRouter} from "react-router-dom";
// import Create from "./Create";
var get = localStorage.getItem("data")
var getData = JSON.parse(get);
// localStorage.removeItem("data");

export default class Show extends React.Component{
    render(){
        return(
            <div>
                <h1 style = {{marginTop:"30px"}}>Showing Players Details </h1>
                {getData.map((elem) => {return(
                    <div>
                        <React.Fragment>
                        <Link><span className = "ml-4" style = {{color:"red"}}>{elem.name}</span></Link>
                        <span  className = "ml-4" style = {{color:"green"}}>{elem.country}</span>
                        <span  className = "ml-4">{elem.t20Score}</span>
                        <span  className = "ml-4" style = {{color:"blue"}}>{elem.odiScore}</span>
                        <span  className = "ml-4">{elem.testScore}</span>
                        </React.Fragment>
                    </div>
                )})}
            
            </div>
        )
    }
}