import React from 'react';
import { Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import Navbar from './component/Navbar'
import Homepage from "./component/Homepage.js";
import Product from "./component/Product.js";
import Furniture from "./component/Furniture.js";
import ContactUs from "./component/ContactUs.js";
import AboutUs from "./component/AboutUs.js";
import FAq from "./component/FAq.js";
import Homedecor from "./component/Homedecor.js";
import Imagebig from './component/Imagebig.js'
import Itemlist from './component/Itemlist'
import ProDetails from './component/ProDetails'
import ShopCart from './component/ShopCart'

import './component/design.css'



export default class App extends React.Component  {
  render() {
    return(
      
  <div class="container">
   <div class="row ">
 
    <div class="col-sm-6 col-md-10 bgcolhead">

    <React.Fragment>
    <BrowserRouter>
    <Navbar />
    <h1 class="display-5">Louvre Arts Show and Gallery </h1>
      
      <div class="bgcolhead">
        <Route exact path="/" component={Homepage} />
        <Route path= "/product" component={Product}/>
        <Route path="/furniture" component={Furniture}/>
        <Route path = "/homedecor" component={Homedecor}/>
        <Route path = "/contact" component={ContactUs}/>
        <Route path = "/faq" component={FAq}/>
        <Route path="/about" component={AboutUs} />
        <Route path="/productList" component={Itemlist} />
        <Route path= "/productdetails" component={ProDetails} />
        <Route path="/nature" component={ProDetails} />
        <Route path="/abstract" component={Homedecor} />
        <hr />
               
      </div>
    </BrowserRouter>
    </React.Fragment>
    </div>      
   </div> 
    </div>  

     );
  }
}
