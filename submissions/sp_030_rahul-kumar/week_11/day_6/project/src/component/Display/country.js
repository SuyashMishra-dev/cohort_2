import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {Name} from './../redux/action'

 
 class CountryList extends React.Component{
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
        <div>
        <ul>
            {this.state.country.map(person =>
            
               <Link to="/Create"> <li onClick={()=>this.props.Namesave(person.name)} key={person.name}>{person.name}</li></Link>)}
            
        </ul>
        </div>
    )
       }
    }
    const mapDispatchToProps =(dispatch)=>{
        return{
                Namesave:(val)=>dispatch(Name(val))
        }
    }
    export default connect(
        null,
        mapDispatchToProps
    )(CountryList);