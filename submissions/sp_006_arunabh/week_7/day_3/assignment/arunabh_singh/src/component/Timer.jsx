import React from 'react';
import './Styles.css';

export default class Timer extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            minute: 0,
            second: 0,
            milisecond: 0
        }
    }

    handleChange(key,value){
        this.setState({
            [key]:value
        })
    }

    handleStart(){
        this.updateSecond = setInterval(() => {
            if(this.state.minute === 0){
                clearInterval(this.second);
                clearInterval(this.milisecond);
                this.setState({
                    second: 0,
                    milisecond: 0
                })
            }
            else if(this.state.second === 0) {
                this.setState({
                    second: 60,
                    minute: this.state.minute - 1 
                })
            }
            this.setState({
                second: this.state.second - 1
            })
        }, 1000);

        this.updateMilisecond = setInterval(() => {
            if(this.state.milisecond === 0) {
                this.setState({
                    milisecond: 100
                })
            }
            this.setState({
                milisecond: this.state.milisecond - 1
            })
        }, 10);
    }

    handleStop(){
        clearInterval(this.updateSecond);
        clearInterval(this.updateMilisecond);
    }

    handleReset() {
        this.setState({
            minute: 0,
            second: 0,
            milisecond: 0
        })
    }

    render(){
        return(
            <div className="stopwatch">
                <h3>TIMER</h3>
                <h1>{this.state.minute}m</h1>
                <h2>{this.state.second}s</h2>
                <h3 style={{color:"red"}}>{this.state.milisecond}</h3>
                <input type = "number" onChange = {(e) => this.handleChange("minute", e.target.value)} />
                <br/>
                <button onClick={() => this.handleStart()}>Start</button>
                <button onClick={() => this.handleStop()}>Stop</button>
                <button onClick={() => this.handleReset()}>Reset</button>
            </div>
        )
    }
}