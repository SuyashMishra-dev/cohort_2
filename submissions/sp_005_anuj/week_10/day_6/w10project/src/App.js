import React from 'react';
import './App.css';
import Create from './component/create.js';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <div>
        <React.Fragment>
          <button><Link to="/home">Create</Link></button> 
          {/* <Link to="/mac" className="text-decoration-none text-light">MAC</Link><br /> */}

          <Route path = "/home" exact component = {Create} />
          {/* <Route path="/" exact component={Home} /> */}

        </React.Fragment>
      </div>
    
    </div>

  );
}

export default App;
