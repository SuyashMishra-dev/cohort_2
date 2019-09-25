import React from "react";
import { Route} from "react-router-dom";
import Home from './home.js'
import About from './about.js'
import Contact from './contact.js'
import Services from './service.js'
import Login from './login.js'
const Routes = () => {
  return(
    <div>

<React.Fragment>
<Route path="/" exact component={Home} />

<Route path="/about" component={About} />

<Route path="/contact" component={Contact} />

<Route path="/service" component={Services} />

<Route path="/login" component={Login} />
</React.Fragment>
    </div>
  )
   ;
};
export default Routes;