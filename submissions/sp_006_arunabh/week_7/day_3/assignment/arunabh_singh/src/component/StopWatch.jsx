import React from 'react';
import './Styles.css';

export default class StopWatch extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            sec: 0,
            milisec: 0
        }
    }

    handleClick() {
        this.timerSec = setInterval(() => {
            this.setState({
            sec: this.state.sec + 1,
            milisec: 0,
            })
        }, 1000);
        
        this.timerMili = setInterval(() => {
            this.setState({
                milisec: this.state.milisec + 1
            })
        }, 10);
    }

    handleStop(){
        clearInterval(this.timerSec)
        clearInterval(this.timerMili)
    }

    handleReset(){
        clearInterval(this.timerSec)
        clearInterval(this.timerMili)
        this.setState({
        sec: 0,
        milisec: 0
        })
    }

    render(){
        return(
            <div className="stopwatch">
                <h3>STOPWATCH</h3>
                <h1>{this.state.sec}s</h1>
                <h2 style={{color:"red"}}>{this.state.milisec}</h2>
                <button onClick = {() => {this.handleClick()}}>Start</button>
                <button onClick = {() => {this.handleStop()}}>Stop</button>
                <button onClick = {() => {this.handleReset()}}>Reset</button>
            </div>
        )
    }
}