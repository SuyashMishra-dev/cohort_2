import React from "react";
import {connect } from "react-redux";
import{storeData} from "../redux/action";

class ScoreBorad extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input:''
        }
    }

    render(){
        return(
            <div>
              hello
            </div>
        );
    }
}
export default ScoreBorad;