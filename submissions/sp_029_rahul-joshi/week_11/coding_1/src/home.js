import React, { Component } from 'react'
import axios from "axios";
import { Route,  Link } from "react-router-dom";
import Form from './Form';






export class Home extends Component {
   
        //  super(props);
         state = {
             countrydetails:[]
         
    }

    componentDidMount(){
        axios
          .get("https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json")
          .then(res => {
            // const data = res.data.results;
            console.log(res);
            this.setState({
              countrydetails:res.data
            })
          })
        //   .catch(error => console.log(error));
      }

        // const Allcountries = (props) => {
           

        // }

    render() {
        return (
            <div>
            <ul>
               {this.state.countrydetails.map(countryname=>
               
               <Link to="/Form"> <li key={countryname.id}>Country: {countryname.name}</li></Link>)}

              
               
               
               
            </ul>
            {/* <p>This is a homepage</p> */}


            </div>
            
         )
    }
}





  export default Home