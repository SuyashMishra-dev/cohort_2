import React from 'react';
import Home from './Home';
import { Route, Link, BrowserRouter } from "react-router-dom";
import Create from './Create';
import Show from './Show';

function App(){
    return(
        <BrowserRouter> 
            <Route excat path="/" component={Home} />
            <Route excat path="/create" component={Create} />
            <Route excat path="/show" component={Show} />
        </BrowserRouter> 
    )
}

export default App;