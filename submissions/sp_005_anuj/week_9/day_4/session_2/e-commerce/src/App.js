import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Home from './component/home.js';
import Cart from './component/cart.js';
function App() {
  return (
    <div>
      <div>
        <React.Fragment>
          <nav className=" navbar navbar-dark bg-dark fixed-top">
            <a href="component/home.js"></a>
            <Link to="/" className="text-decoration-none text-light">Home</Link><br />
            <Link to="/cart" className="text-decoration-none text-light">Go to Cart</Link><br />
          </nav>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
