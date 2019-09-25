import React from 'react';

// const Selector = (props) => {
//     let temp;
//     console.log(props.query)
//     if(props.query === 'Length') {
//         temp = props.data.length.map(ele => {
//             return <option value={ele} key={ele}>{ele}</option>
//         })
//     }
//     else if(props.query === 'Volume') {
//         temp = props.data.volume.map(ele => {
//             return <option value={ele} key={ele}>{ele}</option>
//         })
//     }
//     else if(props.query === 'Temperature') {
//         temp = props.data.temperature.map(ele => {
//             return <option value={ele} key={ele}>{ele}</option>
//         })
//     }
//     return <select className='custom-select my-1' name={props.name} onChange={props.func}>
//         <option>Select...</option>
//         {temp}
//     </select>
// }


class Selector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            src: '',
            dest: ''
        }
    }

    handleChange = (e) => {
        this.props.onSelectorChange(e,e.target.value);
    }

    render() {
        const query = this.props.query;
        // const name = this.props.name;
        let temp;

        if(this.props.query === 'Length') {
            temp = this.props.data.length.map(ele => {
                return <option value={ele} key={ele}>{ele}</option>
            })
        }
        else if(this.props.query === 'Volume') {
            temp = this.props.data.volume.map(ele => {
                return <option value={ele} key={ele}>{ele}</option>
            })
        }
        else if(this.props.query === 'Temperature') {
            temp = this.props.data.temperature.map(ele => {
                return <option value={ele} key={ele}>{ele}</option>
            })
        }
        return <select className='custom-select my-1' name={this.props.name} onChange={this.handleChange}>
            <option>Select...</option>
            {temp}
        </select>
    }
}

export default Selector;