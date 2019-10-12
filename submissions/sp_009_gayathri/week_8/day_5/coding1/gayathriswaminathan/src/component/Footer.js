import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark px-sm-5">
                
                <ul className="navbar-nav align-items-center px-sm-5 ml-50">
      <li className="nav-item ">
      <Link to="/" className="nav-link"> Copyright 2019. Lourve Art Gallery </Link>
      </li> 
      </ul>
      </nav>    
            </div>
        )
    }
}
