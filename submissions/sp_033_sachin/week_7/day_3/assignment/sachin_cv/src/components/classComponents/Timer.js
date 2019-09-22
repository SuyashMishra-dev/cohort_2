import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button'

class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {            
            count:300,
            start:true,
            y : null
        }
    }
    
    toggleTimer = () => {
        if (this.state.start) {
          this.setState({
            y : setInterval(() => {
                  this.setState({
                    count : this.state.count-1
                })                 
              }, 1000)
          })
        } else {
          clearInterval(this.state.y)
        }
        this.setState({
          start : !this.state.start
        })
    }

    setTimerInput = (e)=> {
        e.preventDefault();
        this.setState({
            count : Number(e.target.value)
        })
    }

    resetTimer = () =>{
        this.setState({
            count:300
        })    
    }

    onTimerZero = () => {
        alert('timer done');
        this.resetTimer();
        clearInterval(this.state.y);
        this.setState({
            start: !this.state.start
        })
    }

    render(){
        if (this.state.count == 0) {
            this.onTimerZero();
        }
        let inSec = this.state.count;
        let sec = (inSec)%60;
        let min = 0;
        if (Math.floor(inSec/60)>=60) {
            min = inSec%3600;
        } else {
            min = Math.floor(inSec/60);
        }    
        let hr = Math.floor(inSec/3600);
        return (
            <div>
                <br/>
                <input type="text" onChange={this.setTimerInput} value={this.state.count}  />
                <br/>
                {`${hr}:${min}:${sec}`}
                <h1>
                    <Badge variant="secondary">{hr}</Badge>:
                    <Badge variant="secondary">{min}</Badge>:
                    <Badge variant="secondary">{sec}</Badge>
                </h1>
                <br/>
                <Button style={{marginRight:"10px"}} onClick={this.toggleTimer}>Start/Stop</Button> 
                <Button onClick={this.resetTimer}>Reset</Button>
            </div>
        )
    }
}

export default Timer;