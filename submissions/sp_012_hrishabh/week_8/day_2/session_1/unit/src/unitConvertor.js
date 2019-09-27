import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class UnitConvertor extends React.Component {
    constructor (probs) {
        super(probs);
        this.state = {
            value:'temperature',
            unitTo:'',
            unitFrom:'',
        };
    }
    handleChange = (event) => {
        console.log(this.value,   this.unitFrom,   this.unitTo, event.target.name)
        console.log('handle change called')
        this.setState({[event.target.name]:event.target.value});
        this.setState({name: event.target.name})
        this.setState({unitFrom: event.target.value})
        this.setState({unitTo: event.target.value})
        console.log(event)
    }

    // handleSubmit = (event) => {
    //     alert('Your favorite flavor is: ' + this.state.value);
    //     alert('Your username: ' + this.state.unit);

    // }
    temperatureValue = () => {
        if(this.state.value === "temperature") {
            return (
              <div>
                    <select className = "m-5" name='value' value={this.state.unitFrom} onChange={(e)=>this.handleChange(e)}>
                            <option value="kelvinFrom">Kelvin</option>
                            <option value="celsiusFrom">Celsius</option>
                            <option value="FarehniteFrom">Farehnite</option>                            
                        </select>
                        <select className = "m-5" name='value' value={this.state.unitTo} onChange={(e)=>this.handleChange(e)}>
                            <option value="kelvinTo">Kelvin</option>
                            <option value="celsiusTo">Celsius</option>
                            <option value="farehniteTo">Farehnite</option>                            
                        </select>
              </div>
            )
        }
    }

    speedValue = () => {
        if(this.state.value === "speed") {
            return (
              <div>
                    <select className = "m-5" name='value' value={this.state.unitFrom} onChange={(e)=>this.handleChange(e)}>
                            <option value="kmFrom">Km/hrs</option>
                            <option value="meterFrom">Meter/hrs</option>
                            <option value="milesFrom">Miles/hrs</option>                            
                        </select>
                        <select className = "m-5" name='value' value={this.state.unitTo} onChange={(e)=>this.handleChange(e)}>
                            <option value="kmTo">Km/hrs</option>
                            <option value="meterTo">Meter/hrs</option>
                            <option value="milesTo">Miles/hrs</option>                            
                        </select>
              </div>
            )
        }
    }

    volumnValue = () => {
        if(this.state.value === "volumn") {
            return (
              <div>
                    <select className = "m-5" name='value' value={this.state.unitFrom} onChange={(e)=>this.handleChange(e)}>
                            <option value="literFrom">Liter</option>
                            <option value="MilliliterFrom">Milliliter</option>
                            <option value="cubicFootFrom">Cubic foot</option>                            
                        </select>
                        <select className = "m-5" name='value' value={this.state.unitTo} onChange={(e)=>this.handleChange(e)}>
                            <option value="litterTo">Liter</option>
                            <option value="milliterTo">Milliliter</option>
                            <option value="cubicFootTo">Cubic foot</option>                            
                        </select>
              </div>
            )
        }
    }


    
    render () {
        console.log(this.state.value)
        console.log(this.state)
        return (
           <div style = {{marginLeft: "300px",marginTop: "50px",border: "2px solid black", width: '500px'}}>
               <form onSubmit = {this.handleSubmit}>
                   <label>
                       Unit Convertor.
                       <br />
                       <div>
                       <select className = "m-5" name='value' value={this.state.value} onChange={(e)=>this.handleChange(e)}>
                            <option value="temperature">Temperature</option>
                            <option value="speed">Speed</option>
                            <option value="volumn">Volumn</option>                            
                        </select>
                       </div>
                       <div className = 'd-flex justify-content-center'>
                        <input type = 'text' name = 'unit' onChange = {(e) => this.handleChange(e)} value ={this.state.unit} placeholder = 'Enter Value' />
                        <lable> == </lable>
                        <div style= {{background: "white", width: "200px", height: "80px;"}}>Converted Value</div>
                       </div>
                       <br />
                       
                       
                       {
                           this.temperatureValue()
                           
                       }
                       {
                           this.speedValue()
                       }
                       {
                           this.volumnValue()
                       }
                       <input className = "m-5" type="submit" value="Submit" />
                       
                    
                   </label>

               </form>
           </div>
          );
        
    }
}

