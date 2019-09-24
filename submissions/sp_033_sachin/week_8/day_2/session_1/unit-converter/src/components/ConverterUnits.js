import React from 'react';

class ConverterUnits extends React.Component {
    constructor(props){
        super(props);
        this.state = {      
            type : this.props.type,      
            from : this.props.type.units[0],
            to : this.props.type.units[1],
            fromVal : 0,
            toVal : 0
        }
        
    }

    handleSelect = (e) => {
        // console.log(e.target.name,e.target.value)
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    handleInput = (e) => {
        this.setState({
            fromVal : Number(e.target.value)
        })
    }
    
    convertTemperature = () => {
        let from = this.state.fromVal;
        let to = null;

        if (this.state.from === 'Celsius') {
            switch (this.state.to) {
                case 'Fahrenheit':
                    to = (from*9/5) + 32;
                    break;
                case 'Kelvin':
                    to = from + 273;
                    break;
                
                default:
                    to = from;
                    break;
            }
        } else if(this.state.from === 'Fahrenheit') {
            switch (this.state.to) {
                case 'Celsius':
                    to = (from - 32)*5/9;
                    break;
                case 'Kelvin':
                    to = (from - 32)*5/9 + 273;
                    break;
                
                default:
                    to = from;
                    break;
            } 
        } else if (this.state.from === 'Kelvin') {
            switch (this.state.to) {
                case 'Fahrenheit':
                    to = ((from-273)*9/5) + 32;
                    break;
                case 'Celsius':
                    to = from -273;
                    break;
                
                default:
                    to = from;
                    break;
            }
        } 

        this.setState({
            toVal : to
        })
    }

    convertSpeed = () => {
        let from = this.state.fromVal;
        let to = null;
        // console.log('here')
        if (this.state.from === 'm/s') {
            switch (this.state.to) {
                case 'km/hr':
                    to = from * (18/5)
                    break;
                case 'miles/hr':
                    to = from * (18/5) * 0.6213
                    break;
                
                default:
                    to = from
                    break;
            }
        } else if(this.state.from === 'km/hr') {
            switch (this.state.to) {
                case 'm/s':
                    to = from * (5/18)
                    break;
                case 'miles/hr':
                    to = from * (0.6213)
                    break;
                
                default:
                    to = from;
                    break;
            } 
        } else if (this.state.from === 'miles/hr') {
            switch (this.state.to) {
                case 'km/hr':
                    to = from * (1.6094)
                    break;
                case 'm/s':
                    to = (from * (1.6094))*(5/18)
                    break;
                
                default:
                    to = from;
                    break;
            }
        }
        this.setState({
            toVal : to
        })
    }

    convertVolume = () => {
        let from = this.state.fromVal;
        let to = null;
        
        if (this.state.from === 'litre') {
            switch (this.state.to) {
                case 'millilitre':
                    to = from * 1000;
                    break;
                case 'cubicfoot':
                    to = from * 0.0353147;
                    break;
                
                default:
                    to = from;
                    break;
            }
        } else if(this.state.from === 'millilitre') {
            switch (this.state.to) {
                case 'litre':
                    to = from / 1000;
                    break;
                case 'cubicfoot':
                    to = (from/1000) * 0.0353147
                    break;
                
                default:
                    to = from;
                    break;
            }
        } else if (this.state.from === 'cubicfoot') {
            switch (this.state.to) {
                case 'millilitre':
                    to = from * 28.3168 * 1000
                    break;
                case 'litre':
                    to = from * 28.3168;
                    break;
                
                default:
                    to = from;
                    break;
            }
        }
        this.setState({
            toVal : to
        })
    }

    convert = () => {
        
        if (this.props.type.value === 'Temperature') {
            
            this.convertTemperature();

        } else if (this.props.type.value === 'Speed') {

            this.convertSpeed();

        } else if (this.props.type.value === 'Volume') {
            
            this.convertVolume();

        }


    }

    static getDerivedStateFromProps(props, current_state) {
        console.log(current_state,props)
        if (current_state.type[0] !== props.type[0]) {
            console.log('should come once')
          return {
            from : props.type.units[0],
            to : props.type.units[1]
          }
        }
        //  else {
        //     return {
        //         ...current_state
        //     }
        // }
        return null
        
    }
    // componentDidMount() {
        // this.setState({
        //     type : {
        //         value : this.props.type.value,
        //         units : this.props.type.units
        //     }
        // })
        // console.log('comp did mount')
    // }

    // componentWillUnmount() {
    //     console.log('comp will unmount')
    // }

    render() {
        console.log(this.state)
        return (
            <div className="row">
                <div className="offset-md-2 col-md-4">
                    <div className="row">
                        <input type="text" onChange={(e)=>{this.handleInput(e)}} className="form-control" value={this.state.fromVal} />
                    </div>
                    <div className="row">
                        <select className="form-control" name="from" value={this.state.from} onChange={(e)=>{this.handleSelect(e)}}>
                            {this.props.type.units.map((el,i)=><option key={i+'#'} value={el}>{el}</option>)}
                        </select>
                    </div>
                </div>
                <div className="offset-md-2 col-md-4">
                    <div className="row">
                        <input type="text" className="form-control" value={this.state.toVal} />
                    </div>
                    <div className="row">
                        <select className="form-control" name="to" value={this.state.to} onChange={(e)=>{this.handleSelect(e)}}>
                            {this.props.type.units.map((el,i)=><option key={i+'#'} value={el}>{el}</option>)}
                        </select>
                    </div>
                </div>
                <div className="offset-md-4 col-md-4">
                    <button onClick={this.convert} className="btn btn-success">Convert</button>
                </div>
                <div className="offset-md-4 col-md-4">
                    <h3>{this.state.toVal!==null?this.state.toVal:''}</h3>
                </div>
            </div>
        )
    }
}

export default ConverterUnits;
