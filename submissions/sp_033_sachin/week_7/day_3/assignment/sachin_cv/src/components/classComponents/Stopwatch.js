import React from 'react';
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

class StopWatch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0,      
            start : true,
            x : null,
        }
    }

    resetWatch = () => {
        this.setState({
          count:0
        })  
    }

    toggleStopWatch = () => {
        if (this.state.start) {
          this.setState({
            x : setInterval(() => {
                  this.setState({
                    count : this.state.count+1
                  })
                  // clockDisplay.textContent = displayTime(count);
              }, 1000)
          })
        } else {
          clearInterval(this.state.x)
        }
    
        this.setState({
          start : !this.state.start
        })    
    }

    render(){
        let sec = ((this.state.count))%60;
        let min = null;
        if (Math.floor((this.state.count)/60)>=60) {
            min = (this.state.count)%3600;
        } else {
            min = Math.floor((this.state.count)/60);
        }    
        let hr = Math.floor((this.state.count)/3600);
        return (
            <div>
                <br />
                {/* {this.state.count} */}
                <h1>
                    {hr==0?null:<Badge variant="secondary">{hr}</Badge>+":"}
                    {min==0?null:<Badge variant="secondary">{min}</Badge>+':'}
                    <Badge variant="secondary">{sec}</Badge>
                </h1>
                <br />
                <Button style={{marginRight:"10px"}} onClick={this.toggleStopWatch}>Start/Stop</Button> 
                <Button onClick={this.resetWatch}>Reset</Button>
            </div>
        )
    }
}

export default StopWatch;