import React from 'react';
import { tsExpressionWithTypeArguments } from '@babel/types';
class Create extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            name : this.name,
            country : this.country,
            t20s : this.t20s,
            odis : this.odis,
            tests : this.tests
        }
    }
        render() {
        return(
            <div className = "App">
                <h1>Create Your Team</h1>
                <div className = "container-fluid"> 
                    <input placeholder = "Enter Name" style = {{borderRadius: "15px"}}></input><br></br>
                    <select style = {{borderRadius: "15px"}}> 
                        <option>India</option>
                        <option>England</option>
                        <option>Pakistan</option>
                        <option>New Zealand</option>
                        <option>Australia</option>
                        <option>Zimbabwe</option>
                        <option>USA</option>
                        <option>Canada</option>
                        <option>China</option>
                        <optin>West indies</optin>
                    </select><br></br>
                    <input type = "number" placeholder = "T20 Score" style = {{borderRadius: "15px"}}></input><br></br>
                    <input type = "number" placeholder = "ODI Score" style = {{borderRadius: "15px"}}></input><br></br>
                    <input type = "number" placeholder = "Test Score" style = {{borderRadius: "15px"}}></input><br></br>
                    <button style = {{borderRadius: "15px"}}>Submit</button>
                </div>
            </div>
        );
    }   
}
export default Create;