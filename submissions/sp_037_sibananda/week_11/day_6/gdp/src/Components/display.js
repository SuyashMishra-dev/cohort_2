import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux'
import Data from "./data"


const Display = (props) => {
    console.log(props.harshit)
    var val = props.show.map(a => {
        return <div className="row">

            <h1>{a.Capital}</h1>
            <h1>{a.Continent}</h1>
            <h1>{a.Gdp}</h1>
            <h1>{a.Population}</h1>


        </div>

    })
    return (

        <div>
            <div>

            </div>

            <div>
                {val}
            </div>
            <div>
                <Data />
            </div>

        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        show: state.user,
        harshit: state.name
    }
}
export default connect(mapStateToProps)(Display);