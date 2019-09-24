import React from 'react';
import ConvertUnits from './ConverterUnits';

class ConverterType extends React.Component {
    constructor(){
        super();
        this.state = {
            types : [
                {
                    value : 'Temperature',
                    units : ['Celsius','Fahrenheit','Kelvin']
                },
                {
                    value : 'Speed',
                    units : ['m/s','km/hr','miles/hr']
                },
                {
                    value : 'Volume',
                    units : ['litre','millilitre','cubicfoot']
                }
            ],
            selectedType : 0
        }
    }

    handleSelect = (e) => {
        this.setState({
            selectedType : e.target.value
        })
    }

    render() {
        
        return (
            <div className="container-fluid">
                <div className="row">
                <div className="offset-md-4 col-md-4">
                    <select className="form-control" onChange={(e)=>{this.handleSelect(e)}} value={this.state.selectedType}>
                        {this.state.types.map((type,i)=><option key={i+'#'} value={i}>{type.value}</option>)}
                    </select>
                </div>                
                </div>
                <ConvertUnits type={this.state.types[this.state.selectedType]} />
            </div>
        )
    }
}

export default ConverterType;

