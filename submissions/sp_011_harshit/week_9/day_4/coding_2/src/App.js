import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './component /Homepage'

import AddProduct from './component /addproducts'
import {BrowserRouter,Link,Route} from "react-router-dom"
import Cart from './component /cart'
import Order from './component /Order'

function App() {
  return (
    <BrowserRouter>
      <div>
      <div className="row bg-secondary ">
        <Link className="ml-4 text-white" to="/">HOMEPAGE</Link>
        <Link className="ml-4 text-white" to="/addproducts">AddProducts</Link>
        <Link className="ml-4 text-white" to="/order">Order</Link>
        <Link className="ml-4 text-white" to="/cart">Cart</Link>
      </div>
      <div>
          <div >
            <Route  path="/" exact render={() => <Homepage />} />
          </div>
          <div>
            <Route path="/addproducts" exact render={() => <AddProduct />} />
          </div>
          <div>
            <Route path="/cart" exact render={() => <Cart />} />
          </div>
          <div>
            <Route path="/order" exact render={() => <Order />} />
          </div>
      </div>
      </div>

    </BrowserRouter >

  );
}

export default App;
