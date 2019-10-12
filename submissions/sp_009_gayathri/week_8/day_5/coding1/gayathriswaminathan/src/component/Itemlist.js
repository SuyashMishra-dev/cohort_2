import React, { Component } from 'react'
// import Product from './Product'
import {Link}from 'react-router-dom'

export default class Itemlist extends Component {
    render() {
        return (
            <div>
            
                <Link to="/nature">Inspired By Nature</Link>
               
                <br />
                <Link to= "/abstract"> Abstract Paintings</Link>
            </div>
        )
    }
}
