import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
 
export default class CountryList extends React.Component{
    state ={
        country :[],
    };
    componentDidMount(){
        axios.get(`https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json`)
        .then(res=>{
       console.log(res)
       this.setState({country:res.data});
    })
    }

render(){
    return (
        <ul>
            {this.state.country.map(person =><Link to =  {`/:${person.name}`}>
                <li key ={person.name}>{person.name}</li></Link>
            )}
        </ul>
    )
}
}