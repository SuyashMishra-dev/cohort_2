import React from "react";
import { Route } from "react-router-dom";
import Home from './Home.js'
import About from './About.js'
import Lookbook from './Contact.js'
import Shop from './Services.js'
import Login from './Login.js'
const Routes = () => {
  return (
    <div>

      <React.Fragment>
        <Route path="/" exact component={Home} />

        <Route path="/about" component={About} />

        <Route path="/lookbook" component={Lookbook} />

        <Route path="/shop" component={Shop} />

        <Route path="/login" component={Login} />
      </React.Fragment>
    </div>
  )
    ;
};
export default Routes;