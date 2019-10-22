import React, { Component } from 'react';
// import './Form.css'
var arr=[];
var data = JSON.parse(localStorage.getItem("StudentDetails"));


class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            capital: "",
            continent: "",
            gdp: "",
            population: ""
            
        }
    }


    handelAll = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handelsubmit = (event) => {

       // alert(JSON.stringify(this.state))
        event.preventDefault();
        arr.push(this.state);
       // console.log(arr);
        localStorage.setItem("StudentDetails",JSON.stringify(arr));

       
        // console.log(a);

    }



    render() {
        return (
            <div>
                <form onSubmit={this.handelsubmit}>

                    <label>CAPITAL</label> <br />
                    <input type="text" name="capital" value={this.state.capital}
                                                      onChange={this.handelAll}/><br/>

                    <label>CONTINENT</label><br />
                    <input type="text" name="continent" value={this.state.continent}
                                                        onChange={this.handelAll}/><br />

                    <label>GDP</label><br />
                    <input type="text" name="gdp" value={this.state.gdp}
                                                  onChange={this.handelAll}/><br/>

                    <label>POPULATION</label> <br />
                    <input type="text" name="population" value={this.state.population}
                                                         onChange={this.handelAll}/><br/> 

                    <input type="submit" value="SUBMIT"/>
                </form>
                {
                 data.map(items=>{
                     return(
                         <div>
                             <p>{items.capital}</p>
                             <p>{items.continent}</p>
                             <p>{items.gdp}</p>
                             <p>{items.population}</p>
                         </div>
                     );
                 })
                }
            </div>
        );
    }
}

export default Form;