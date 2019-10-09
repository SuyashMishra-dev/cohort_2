import React from 'react';
class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sec: 0,
            milisec: 0,
        }
    }

    handleClick_Start() {
        this.second = setInterval(() => { this.setState({ sec: this.state.sec + 1, milisec: 0,})}, 1000);
        this.mili_second = setInterval(() => { this.setState({ milisec: this.state.milisec + 1 })}, 10);
    }

    handleClick_Stop() {
        clearInterval(this.second)
        clearInterval(this.mili_second)
    }

    handleClick_Reset() {
        clearInterval(this.second)
        clearInterval(this.mili_second)
        this.setState({
            sec: 0,
            milisec: 0
        })
    }

    render() {
        return (
            <div className = "container-fluid">
                <div className = "float-left border w-50">
                    <h6>Stopwatch</h6>
                    <hr></hr>
                    <div className = "row offset-5">
                        <h1 className = "col-2">{this.state.sec}s</h1>
                        <h2 className = " mt-2 ml-3">{this.state.milisec}</h2>
                    </div>
                    <hr></hr>
                        <button onClick={() => { this.handleClick_Start() }}>Start</button>
                        <button onClick={() => { this.handleClick_Stop() }}>Stop</button>
                        <button onClick={() => { this.handleClick_Reset() }}>Reset</button>
                </div>
            </div>
        )
    }
}
export default Stopwatch;