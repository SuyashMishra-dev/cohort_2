import React from 'react';
import logo from './logo.svg';
import Home from "./component/Home";
import Mac from "./component/Mac";
import IPad from "./component/IPad";
import IPhone from "./component/IPhone";
import Watch from "./component/Watch";
import Music from "./component/Music";
import Support from "./component/Support";
import {Link} from "react-router-dom";
import {Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <React.Fragment>
        <BrowserRouter>
        <nav className="navbar text-light text-decoration-none" style={{backgroundColor: "black"}}>
        <Link to="/" className="text-light"><img style={{height: 50, marginLeft: 100}} src="logo.png" /></Link>
        <Link to="/mac" className="text-light text-decoration-none">Mac</Link>
        <Link to="/ipad" className="text-light text-decoration-none" >iPad</Link>
        <Link to="/iphone" className="text-light text-decoration-none">iPhone</Link>
        <Link to="/watch" className="text-light text-decoration-none">Watch</Link>
        <Link to="/music" className="text-light text-decoration-none">Music</Link>
        <Link to="/support" className="text-light text-decoration-none">Support</Link>
        </nav>


        <div>
          <Route path="/" exact component={Home} />
          <Route path="/mac" component={Mac} />
          <Route path="/ipad" component={IPad} />
          <Route path="/iphone" component={IPhone} />
          <Route path="/watch" component={Watch} />
          <Route path="/music" component={Music} />
          <Route path="/support" component={Support} />
        </div>

        </BrowserRouter>
      </React.Fragment>
    </div>
  );
}

export default App;
