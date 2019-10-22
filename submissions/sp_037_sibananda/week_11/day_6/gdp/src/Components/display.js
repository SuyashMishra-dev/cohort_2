import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'



const Display = (props) => {
    console.log(props.newData)
    var val = props.show.map(a => {
        return (
        <div className="row">
        <table class="table">
        <thead>
        <tr>
      <th scope="col">#</th>
      <th scope="col">Capital</th>
      <th scope="col">continent</th>
      <th scope="col">GDP</th>
      <th scope="col">Population</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{a.Capital}</td>
      <td>{a.Continent}</td>
      <td>{a.Gdp}</td>
      <td>{a.Population}</td>
    </tr>
   
  </tbody>
</table>   

        </div>
        )
    })
    return (

        <div>
            <div>

            </div>

            <div>
                {val}
            </div>
           
        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        show: state.user,
        newData: state.name
    }
}
export default connect(mapStateToProps)(Display);