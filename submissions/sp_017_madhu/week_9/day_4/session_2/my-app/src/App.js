import React from 'react';
import { Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./Component/Home";
import Support from "./Component/Support";
import Issue from "./Component/Issue";
import Create from "./Component/Create";
import ProductListRedux from "./ProductListRedux";
import Crossed from "./Component/Crossed";
import Fotter from "./Component/Fotter";
import Product from "./Component/Product";
import Order from "./Component/Order";
import Cart from "./Component/Cart";
import DisplayProduct from "./Component/DisplayProduct";
import SeeMore from "./Component/SeeMore";
import DisplayMore from "./Component/DisplayMore";

import {connect} from "react-redux";

function App() {
  return (
<div className="App">
    <React.Fragment>
        <BrowserRouter>
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary row">

          <Link to="/home" ><img width="50px" height="30px" src="data:image/png;base64,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" /></Link>
            
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class=" d-flex justify-content-right navbar-nav col-md-12">
              <Link to="/home" class="nav-item nav-link active ml-5" >Home <span class="sr-only">(current)</span></Link>
              <Link to="/DisplayProduct" class="nav-item nav-link active ml-5" >Product <span class="sr-only">(current)</span></Link>

              <Link to="/home" class="nav-item nav-link active ml-5" >My Order <span class="sr-only">(current)</span></Link>

              <Link to="/support" class="nav-item nav-link active ml-5" >Support</Link>
              <Link to="/issue" class="nav-item nav-link active ml-5" >Issue</Link>
              <Link to="/ProductListRedux" class="nav-item nav-link active ml-5 mr-5" >Create Incident</Link>
              <Link to="/DisplayMore" class="nav-item nav-link active ml-5 text-right" >More</Link>


              </div>
            </div>
          </nav>
          <Route path="/home" exact component={Home} />
          <Route path="/support" component={Support} />
          <Route path="/issue" component={Issue} />
          <Route path="/create" component={Create} />
          <Route path="/ProductListRedux" component={ProductListRedux} />
          <Route path="/Crossed" component={Crossed} />
          <Route path="/Order" component={Order} />
          <Route path="/Product" component={Product} />
          <Route path="/Cart" component={Cart} />
          <Route path="/DisplayProduct" component={DisplayProduct} />
          <Route path="DisplayMore" component={DisplayMore}/>
          <Route path="SeeMore" component={SeeMore}/>


<Fotter />

        </BrowserRouter>
    </React.Fragment>
    
     </div>
  
  );
}


  export default App;