import React from 'react';
import logo from './logo.svg';
import './App.css';

import Selector from './components/Selector'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            selectorData: {
                length: ['Meter', 'Kilometer', 'Miles'],
                temperature: ['Celsius', 'Fahrenheit', 'Kelvin'],
                volume: ['Litre', 'MilliLitre', 'Gallon'],
            },
            mainSelect: '',
            src: '',
            dest: '',
            valOne: 0,
            valTwo: 0,
            scale: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value});
    }

    handleSelectorOne = (e, q) => {
        this.setState({
            src: q
        })
    }

    handleSelectorTwo = (e,q) => {
        this.setState({
            dest: q
        })
    }

    handleInputOne = (e) => {
        this.setState({valOne: e.target.value, scale: 'src'}, () => this.tryConvert('src'));
    }
    handleInputtwo = (e) => {
        this.setState({valTwo: e.target.value, scale: 'dest'}, () => this.tryConvert('dest'));
    }

    tryConvert(scale) {
        let valOne = parseInt(this.state.valOne);
        let valTwo = parseInt(this.state.valTwo);
        let src = this.state.src;
        let dest = this.state.dest;
        if(scale === "src") {
            switch(src) {
                case 'Meter': {
                    if(dest === 'Kilometer') {
                        let out = valOne / 1000;
                        this.setState({valTwo: out});
                    }
                    else if(dest === 'Miles') {
                        let out = valOne / 1609.344;
                        this.setState({valTwo: out})
                    }
                    else this.setState({valTwo: valOne})
                    break;
                }
                case 'Kilometer': {
                    if(dest === 'Meter') {
                        let out = valOne * 1000;
                        this.setState({valTwo: out})
                    }
                    else if(dest === 'Miles') {
                        let out = valOne / 1.609;
                        this.setState({valTwo: out})
                    }
                    else this.setState({valTwo: valOne})
                    break;
                }
                case 'Miles': {
                    if(dest === 'Meter') {
                        let out = valOne * 1609.344;
                        this.setState({valTwo: out})
                    }
                    else if(dest === 'Kilometer') {
                        let out = valOne * 1.609;
                        this.setState({valTwo: out})
                    }
                    else this.setState({valTwo: valOne})
                    break;
                }

                case 'Celsius': {
                    if(dest === 'Kelvin') {
                        let out = valOne + 273.15;
                        this.setState({valTwo: out})
                    }
                    else if(dest === 'Fahrenheit') {
                        let out = (valOne * (9/5)) + 32
                        this.setState({valTwo: out})
                    }
                    else this.setState({valTwo: valOne})
                    break;
                }
                case 'Kelvin': {
                    if(dest === 'Celsius') {
                        let out = valOne - 273.15;
                        this.setState({valTwo: out})
                    }
                    else if(dest === 'Fahrenheit') {
                        let out = (valOne - 273.15) * (9/5) + 32
                        this.setState({valTwo: out})
                    }
                    else this.setState({valTwo: valOne})
                    break;
                }
                case 'Fahrenheit': {
                    if(dest === 'Celsius') {
                        let out = (valOne - 32) * (5/9)
                        this.setState({valTwo: out})
                    }
                    else if(dest === 'Kelvin') {
                        let out = (valOne - 32) * (5/9) + 273.15
                        this.setState({valTwo: out})
                    }
                    else this.setState({valTwo: valOne})
                    break;
                }

                case 'Litre': {
                    if(dest === 'MilliLitre') {
                        let out = valOne * 1000;
                        this.setState({valTwo: out})
                    }
                    else if(dest === 'Gallon') {
                        let out = valOne / 3.785
                        this.setState({valTwo: out})
                    }
                    else this.setState({valTwo: valOne})
                    break;
                }
                case 'MilliLitre': {
                    if(dest === 'Litre') {
                        let out = valOne / 1000;
                        this.setState({valTwo: out})
                    }
                    else if(dest === 'Gallon') {
                        let out = valOne / 3785.412
                        this.setState({valTwo: out})
                    }
                    else this.setState({valTwo: valOne})
                    break;
                }
                case 'Gallon': {
                    if(dest === 'Litre') {
                        let out = valOne * 3.785;
                        this.setState({valTwo: out})
                    }
                    else if(dest === 'MilliLitre') {
                        let out = valOne * 3785.412
                        this.setState({valTwo: out})
                    }
                    else this.setState({valTwo: valOne})
                    break;
                }
            }
        }
            
        else if(scale == 'dest') {
            switch(dest) {
                case 'Meter': {
                    if(src === 'Kilometer') {
                        let out = valTwo / 1000;
                        this.setState({valOne: out});
                    }
                    else if(src === 'Miles') {
                        let out = valTwo / 1609.344;
                        this.setState({valOne: out})
                    }
                    else this.setState({valOne: valTwo})
                    break;
                }
                case 'Kilometer': {
                    if(src === 'Meter') {
                        let out = valTwo * 1000;
                        this.setState({valOne: out})
                    }
                    else if(src === 'Miles') {
                        let out = valTwo / 1.609;
                        this.setState({valOne: out})
                    }
                    else this.setState({valOne: valTwo})
                    break;
                }
                case 'Miles': {
                    if(src === 'Meter') {
                        let out = valTwo * 1609.344;
                        this.setState({valOne: out})
                    }
                    else if(src === 'Kilometer') {
                        let out = valTwo * 1.609;
                        this.setState({valOne: out})
                    }
                    else this.setState({valOne: valTwo})
                    break;
                }
                
                case 'Celsius': {
                    if(src === 'Kelvin') {
                        let out = valTwo + 273.15;
                        this.setState({valOne: out})
                    }
                    else if(src === 'Fahrenheit') {
                        let out = (valTwo * (9/5)) + 32
                        this.setState({valOne: out})
                    }
                    else this.setState({valOne: valTwo})
                    break;
                }
                case 'Kelvin': {
                    if(src === 'Celsius') {
                        let out = valTwo - 273.15;
                        this.setState({valOne: out})
                    }
                    else if(src === 'Fahrenheit') {
                        let out = (valTwo - 273.15) * (9/5) + 32
                        this.setState({valOne: out})
                    }
                    else this.setState({valOne: valTwo})
                    break;
                }
                case 'Fahrenheit': {
                    if(src === 'Celsius') {
                        let out = (valTwo - 32) * (5/9)
                        this.setState({valOne: out})
                    }
                    else if(src === 'Kelvin') {
                        let out = (valTwo - 32) * (5/9) + 273.15
                        this.setState({valOne: out})
                    }
                    else this.setState({valOne: valTwo})
                    break;
                }
                
                case 'Litre': {
                    if(src === 'MilliLitre') {
                        let out = valTwo * 1000;
                        this.setState({valOne: out})
                    }
                    else if(src === 'Gallon') {
                        let out = valTwo / 3.785
                        this.setState({valOne: out})
                    }
                    else this.setState({valOne: valTwo})
                    break;
                }
                case 'MilliLitre': {
                    if(src === 'Litre') {
                        let out = valTwo / 1000;
                        this.setState({valOne: out})
                    }
                    else if(src === 'Gallon') {
                        let out = valTwo / 3785.412
                        this.setState({valOne: out})
                    }
                    else this.setState({valOne: valTwo})
                    break;
                }
                case 'Gallon': {
                    if(src === 'Litre') {
                        let out = valTwo * 3.785;
                        this.setState({valOne: out})
                    }
                    else if(src === 'MilliLitre') {
                        let out = valTwo * 3785.412
                        this.setState({valOne: out})
                    }
                    else this.setState({valOne: valTwo})
                    break;
                }
            }
        }
    }

    // tryConvert(temp, cb) {
    //     const input = parseFloat(temp);
    //     if(Number.isNaN(input)) {
    //         return '';
    //     }
    //     const output = cb(input);
    //     const rounded = Math.round(output * 1000) /1000;
    //     return rounded.toString();
    // }

    // toCelsius(fahrenheit) {
    //     return (fahrenheit - 32) * 5 / 9;
    //   }
      
    // toFahrenheit(celsius) {
    //     return (celsius * 9 / 5) + 32;
    //   }

    render() {
        // const v1 = this.state.valOne;
        // const v2 = this.state.valTwo;
        // const scale = this.state.scale;
        // const showOne = scale === 'src' ? this.tryConvert(v1, this.toCelsius) : v1;
        // const showTwo = scale === 'dist' ? this.tryConvert(v2, this.toFahrenheit) : v2;
        return(
            <div className='container'>
                <select className='custom-select m-4' value={this.state.mainSelect} name='mainSelect' onChange={this.handleChange}>
                    <option>Select...</option>
                    <option value='Length'>Length</option>
                    <option value='Temperature'>Temperature</option>
                    <option value='Volume'>Volume</option>
                </select>
                <div className='row m-4'>
                    <div className='col-md-4 offset-md-2'>
                        {this.state.mainSelect ? (
                            <Selector data={this.state.selectorData} query={this.state.mainSelect} name='src' onSelectorChange={(e,q) => this.handleSelectorOne(e,q)} />
                        ) : (<select className='custom-select'></select>)}
                        {/* <select className='custom-select my-1' value={this.state.src} name='src' onChange={this.handleChange}></select> */}
                        <input className='form-control my-1' onChange={(e) => this.handleInputOne(e)} name="valOne" value={this.state.valOne}></input>
                    </div>
                    <div className='col-md-4'>
                        {this.state.mainSelect ? (
                            <Selector data={this.state.selectorData} query={this.state.mainSelect} name='dist' onSelectorChange={(e,q) => this.handleSelectorTwo(e,q)} />
                        ) : (<select className='custom-select'></select>)}
                        {/* <select className='custom-select my-1' value={this.state.dest} name='dest' onChange={this.handleChange}></select> */}
                        <input className='form-control my-1' onChange={(e) => this.handleInputtwo(e)} name="valTwo" value={this.state.valTwo}></input>
                    </div>
                </div>
            </div>
        )
    }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
