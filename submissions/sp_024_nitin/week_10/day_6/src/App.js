import React from 'react';
import {Route, BrowserRouter, Link} from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';


export default class App extends React.Component {
  render() {
      return (
      <BrowserRouter>
        <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-warning">
              <Link className="navbar-brand nav-link active" to="/Home">Home</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-item nav-link" to="/Create">Create</Link>
                </div>
              </div>
            </nav>
              <Route path = "/Home" component = {Home} />
              <Route path = "/Create" component = {Create} />
            </React.Fragment>
    </BrowserRouter>
          
      )
  }
}