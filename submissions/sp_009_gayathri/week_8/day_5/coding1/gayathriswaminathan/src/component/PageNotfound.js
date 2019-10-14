import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class PageNotfound extends Component {
    render() {
        return (
            <div className="Page-info">
             <br />
             <h1> 404  </h1>
             <hr />
             <h3>Page Not found </h3>
             <Link to = "/"> Home</Link>
            </div>
        )
    }
}
