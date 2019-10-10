import React from 'react';
import {Route , Switch} from 'react-router-dom';
import TableAndDesk from '../Components/Collection/TableAndDesk';
import Chairs from '../Components/Collection/Chairs';
import Home from '../Components/Home'
import AllCollection from '../Components/Collection/AllCollection';
import Products from '../Components/Products';

const CollectionRoutes = () => {

    return (
        <React.Fragment>
        <Switch>
            <Route exact path="/"render={props=><Home {...props} />} />
            <Route exact path="/collection" render = {props => <AllCollection {...props} />} />
            {/* <Route path="/collection/chairs" component={Chairs}/>
            <Route path="/collection/table-and-desk" component={TableAndDesk} /> */}
            <Route path="/collection/:product" render={props=><Products {...props} />} />
            {/* <Route component = {NotFound} /> */}
            <Route render={()=><h1>Page Not Found</h1>} />
        </Switch>
        </React.Fragment>
    )
}

export default CollectionRoutes;