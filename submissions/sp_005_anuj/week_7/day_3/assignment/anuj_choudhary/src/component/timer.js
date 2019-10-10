import React from 'react';
class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            minute: 5,
            second: 0,
        }
    }

    handleChange(key,value) {
        this.setState({
            [key]:value
        })
    }

    handleClick_Start() {
        this.updateSecond = setInterval(() => {
            if (this.state.minute === 0) {
                clearInterval(this.second);
                this.setState({
                    second: 0,
                })
            }
            else if (this.state.second === 0) {
                this.setState({
                    second: 60,
                    minute: this.state.minute - 1
                })
            }
            this.setState({
                second: this.state.second - 1
            })
        }, 1000);
    }

    handleClick_stop() {
        clearInterval(this.updateSecond);
    }

    handleClick_reset() {
        this.setState({
            minute: 5,
            second: 0,
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className = "float-right border  w-50">
                    <h6>Timer</h6>
                    <hr></hr>
                        <input type="number" onChange={(e) => this.handleChange("minute", e.target.value)} />
                    <div className="row text-center offset-5">
                        <h1 className = "col-1">{this.state.minute}m</h1>
                        <h2 className = "col-1 mt-2 ml-4">{this.state.second}s</h2>
                    </div>
                    <hr></hr>
                <button onClick={() => this.handleClick_Start()}>Start</button>
                <button onClick={() => this.handleClick_stop()}>Stop</button>
                <button onClick={() => this.handleClick_reset()}>Reset</button>
            </div>
        </div>
        )
    }
}
export default Timer;