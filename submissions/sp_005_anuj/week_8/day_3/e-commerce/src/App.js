import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Home from './component/home.js';
import MAC from './component/mac.js';
import IPAD from './component/ipad.js';
import IPHONE from './component/iphone.js';
import WATCH from './component/watch.js';
import TV from './component/tv.js';
import MUSIC from './component/music.js';
import SUPPORT from './component/support.js'
function App() {
  return (
    <div>
      <React.Fragment>
        <nav className=" navbar navbar-dark bg-dark fixed-top">
          <img src = "logo.png" className = "logo-img ml-5"></img>
          <Link to="/" className="text-decoration-none text-light">Home</Link><br />
          <Link to="/mac" className="text-decoration-none text-light">MAC</Link><br />
          <Link to="/ipad" className="text-decoration-none text-light">iPad</Link><br />
          <Link to="/iphone" className="text-decoration-none text-light">iPhone</Link><br />
          <Link to="/watch" className="text-decoration-none text-light">Watch</Link><br />
          <Link to="/tv" className="text-decoration-none text-light">TV</Link><br />
          <Link to="/music" className="text-decoration-none text-light">Music</Link><br />
          <Link to="/support" className="text-decoration-none text-light">Support</Link><br />
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/mac" component={MAC} />
        <Route path="/ipad" component={IPAD} />
        <Route path="/iphone" component={IPHONE} />
        <Route path="/watch" exact component={WATCH} />
        <Route path="/tv" component={TV} />
        <Route path="/music" component={MUSIC} />
        <Route path="/support" component={SUPPORT} />
      </React.Fragment>
    
    </div>
  );
}

export default App;
