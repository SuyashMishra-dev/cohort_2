import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class LandingPage extends Component {
    render() {
        return (
            <div>
               <button>
               <Link to="/create">Create</Link> </button>
               <button> Show</button>
            </div>
        )
    }
}
