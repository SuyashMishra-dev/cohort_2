import React from 'react';
import {Link} from "react-router-dom";

export default class Header extends React.Component {
  render(){
    return (
      <div className="row border-bottom fixed-top" style={{background:"rgb(46,139,87)"}}>
        
        <div className="col-md-1">
        </div>
        
        <Link to="/"><img src="https://stmed.net/sites/default/files/cricket-wallpapers-30994-7477504.jpg" height="50px"  className="d-inline-block align-top mt-2 mb-2 shadow bg-white rounded" alt="Ticket Management" /></Link>
        <Link to="/" className="navbar-brand text-white m-3">Scorecard</Link>
        
        <div className="col-md-6">
        </div>
        
        <nav className="navbar navbar-expand-lg">
          <Link to="/" className="navbar-brand text-white mr-5">Home</Link>
          <Link to="/login" className="navbar-brand text-white mr-5">Login</Link>
          <Link to="/support" className="navbar-brand text-white">Need Help?</Link>
        </nav>

      </div>
    )
  }
}
