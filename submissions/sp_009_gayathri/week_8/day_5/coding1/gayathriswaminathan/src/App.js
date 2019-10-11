import React from 'react';
import './App.css'
import { Route, Switch,BrowserRouter } from "react-router-dom";

import './App.css'
import Navbar from './component/Navbar'
import Homepage from "./component/Homepage.js";
import Product from "./component/Product.js";
import ContactUs from "./component/ContactUs.js";
import AboutUs from "./component/AboutUs.js";
import FAq from "./component/FAq.js";
import Homedecor from "./component/Homedecor.js";
// import Imagebig from './component/Imagebig.js'
import Itemlist from './component/Itemlist'
import ProDetails from './component/ProDetails'
import ShopCart from './component/ShopCart'
import PageNotfound from './component/PageNotfound'
import Footer from './component/Footer'
import India from './component/India'
import FineArtMural from './component/FineArtMural'
import './component/design.css'
import BabyLama from './component/BabyLama';



export default class App extends React.Component  {
  render() {
    return(
      
  <div className="container">
   <div className="row ">
 
    <div className="col-sm-6 col-md-10 bgcolhead">

    <React.Fragment>
    <BrowserRouter>
    <Navbar />
    
      <h1 className="display-4">Louvre Arts</h1>
    <div className="header">  
    </div>
     
    
  
      <div className="bgcolhead">
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path= "/product" component={Product}/>
        <Route path = "/homedecor" component={Homedecor}/>
        <Route path = "/contact" component={ContactUs}/>
        <Route path = "/faq" component={FAq}/>
        <Route path="/about" component={AboutUs} />
        <Route path="/productList" component={Itemlist} />
        <Route path= "/productdetails" component={ProDetails} />
        <Route path="/nature" component={ProDetails} />
        <Route path="/abstract" component={Homedecor} />
        <Route path="/shopCart" component={ShopCart} />
        <Route path= "/India" component={India} />
        <Route path= "/FineArtMural" component={FineArtMural} />
        <Route path= "/BabyLama" component={BabyLama} />
        <Route path= "/Orders" component={Orders} />
         
        <Route component={PageNotfound} />
        
        </Switch>
        <hr />
               
      </div>
     <Footer /> 
    </BrowserRouter>
    </React.Fragment>
    </div>      
   </div> 
    </div>  

     );
  }
}
