import React from 'react';
import { Route, Link, BrowserRouter } from "react-router-dom";
import Home from './Home'
import Contact from './contact'
import About from './about'
import Services from './services'
import Login from './login'

class App1 extends React.Component{
    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" style={{color: "#9C27B0"}}>Tesla</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link to='/' className="nav-link" href="#">Home <span class="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/contact' className="nav-link" href="#">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/about' className="nav-link" href="#">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/services' className="nav-link" href="#">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/login' className="nav-link" href="#">Login</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </nav>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/about" exact component={About} />
                    <Route path="/services" exact component={Services} />
                    <Route path="/login" exact component={Login} />
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default App1;