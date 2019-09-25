import React from 'react';
import './App.css';
import styles from './App.module.css';

export default class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            val :props.btn
        };
    }
    render(){
    return(
        <div className = "App">
            <button style ={{backgroundColor:"this.props.colour"}}>{this.props.btndata}</button>
        </div>
        )
}

}