import React from 'react';
import Create from './Create';
import Show from './Show';
import { Route, Link, BrowserRouter } from "react-router-dom";

function Home(){
    return(
        <React.Fragment>

            <div class="container">
                <div class="row">
                    <div class="col-6 text-center">
                        <h1>Check Your Favrioute Player</h1>
                       <Link to="create"><button class="btn btn-danger mr-5">Create</button></Link>
                       <Link to="show" ><button class="btn btn-danger">Show</button></Link>
                    </div>
                </div>
            </div>
 
        </React.Fragment>
    )
}

export default Home;