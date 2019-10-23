import React, { Component } from 'react'

export class Form extends Component {
    constructor(props){
        super();
        this.state = {value: ''};
    }

     handleChange(event) {
    this.setState({value: event.target.value});
  }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     var details = {
    //         capital: this.state.capital,
    //         gdp: this.state.gdp,
    //         population:this.state.population,
    //         continent:this.state.continent
    //     }

        

    
    render() {
        return (

        <form onSubmit={this.handleSubmit}>

<div class="form-row">

<div class="form-group col-md-7 mt-5">
      <label for="inputEmail4">Capital</label>
      <input type="text" class="form-control" value= "capital"placeholder="Capital" />
</div>

<select id="inputState" class="form-control col-md-7 mt-5 ">

        <option selected>Continent</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Africa</option>
</select>



<div class="form-group col-md-7 mt-5">
      <label for="inputEmail4">GDP</label>
      <input type="number" class="form-control" placeholder="Capital" />
</div>
<div class="form-group col-md-7 mt-5">
      <label for="inputEmail4">Population</label>
      <input type="number" class="form-control" placeholder="Population" />
</div>

<div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Submit</button>
</div>


</div>
  
</form>
            

        )
    }
}


export default Form



