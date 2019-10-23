import React from 'react';
import axios from 'axios';

export default class Myname extends React.Component{
    state = {
        paras : [],
    };
    componentDidMount(){
        axios.get ('https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json').then(res => {
            console.log(res)
            this.setState({paras:res.data});
        })
    }
    render(){
        return(
            <ul>
                {this.state.paras.map(person => 
                <li>{person.name}</li>)}
            </ul>
        )
    }
}