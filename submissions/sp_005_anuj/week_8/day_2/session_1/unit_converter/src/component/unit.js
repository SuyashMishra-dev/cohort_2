import React from 'react';
class Unit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ' temperature'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        alert('Your favourite flavour is : ' + this.state.value);
        event.preventDefault();
    }
    render() {
        const input = this.state.value;
        return(
            <div>
            <form onSubmit = {this.haandleSubmit}>
                <label>
                    Select any unit:
                    <select value ={this.state.value}
                    onChange = {this.handleChange}>
                        <option value = "temperature">Temperature</option>
                        <option valaue = "speed">Speed</option>
                        <option value = "volume">Volume</option>
                    </select>
                </label>
            </form>
            </div>
        );
    }
}


export default Unit;