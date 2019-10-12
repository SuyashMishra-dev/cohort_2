import React from "react"
import { equal, subtract, multiply, divide, clear } from "../redux/action";
import { connect } from 'react-redux';
//imp

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ""
        }
    }

    get_input = (e) => {
        console.log(e.target.value)
        let last_value = e.target.value[e.target.value.length-1];
        console.log(last_value)
            this.setState({
                input: this.state.input + e.target.value
            })
    }

    equal = () => {
        this.props.add(this.state.input)
    }

    clear = () => {
        this.setState({
            input: ""
        })
        // this.props.clr()
    }

    render() {
        // console.log(this.state.input)
        // console.log(this.props.resultArray)
        return (
            <div>
                <center>
                    <h1>Calculator</h1>
                    <div className = "container">
                        <div className = "main">
                            <div class = "result">
                                <h1>{this.state.input}</h1> <br></br>
                                <h1>{this.props.result} </h1>
                            </div>
                            <br></br> <br></br>
                            <input className = "btn" type="button" name="7" value="7" onClick={this.get_input} />
                            <input className = "btn" type="button" name="8" value="8" onClick={this.get_input} />
                            <input className = "btn" type="button" name="9" value="9" onClick={this.get_input} />
                            <input className = "btn" type="button" name="ce" value="+" onClick={this.get_input} />
                            <br></br> <br></br>
                            <input className = "btn" type="button" name="4" value="4" onClick={this.get_input} />
                            <input className = "btn" type="button" name="5" value="5" onClick={this.get_input} />
                            <input className = "btn" type="button" name="6" value="6" onClick={this.get_input} />
                            <input className = "btn" type="button" name="-" value="-" onClick={this.get_input} />
                            <br></br> <br></br>
                            <input className = "btn" type="button" name="1" value="1" onClick={this.get_input} />
                            <input className = "btn" type="button" name="2" value="2" onClick={this.get_input} />
                            <input className = "btn" type="button" name="3" value="3" onClick={this.get_input} />
                            <input className = "btn" type="button" name="*" value="*" onClick={this.get_input} />
                            <br></br> <br></br>
                            <input className = "btn" id="btnc" type="button" name="0" value="0" onClick={this.get_input} />
                            <input className = "btn" type="button" name="0" value="." onClick={this.get_input} />
                            <input className = "btn" type="button" name="=" value="=" onClick={this.equal} />
                            <input className = "btn" type="button" name="/" value="/" onClick={this.get_input} /><br></br>
                            <input className = "btn" type="button" name="/" value="C" onClick={this.clear} />
                        </div><br></br>
                        
                    
                    {/* <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br> */}
                    {/* hs */}
                </div>
                </center>
                
                
            </div>
        )
    }
}

const actionCreators = {
    equal,
    subtract,
    multiply,
    divide,
    clear
}

const mapStateToProps = state => {
    console.log("map State called TODO app");
    return {
        result: state.result,
        resultArray: state.resultArray
    };
};
const mapDispatchToProps = dispatch => {
    console.log("map Dispatcher called TODO app");
    return {
        add: item => dispatch(equal(item)),
        clr: item => dispatch(clear(item))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calculator);