import React from 'react';
import Home from './components/Home';
import { Route, BrowserRouter } from "react-router-dom";
import Create from './components/Create';
import Show from './components/Show';
import Display from './components/display';

function App(){
    return(
        <BrowserRouter> 
            <Route path="/" excat component={Home} />
            <Route path="/create" component={Create} />
            <Route path="/show" component={Show} />
            {/* <Route path="/products" component={Display}></Route> */}
            <Route path="/Name:itemId"
                render={(props) => <Display {...props}/>}/>
            {/* <Route path="/Name:itemId"
                render={(props) => <Filter {...props}/>}/> */}
            {/* <Route path="/sort" component={Sort}/> */}
        </BrowserRouter> 
    )
}

export default App;