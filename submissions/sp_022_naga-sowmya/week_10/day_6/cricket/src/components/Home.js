import React from 'react';
import { Link} from "react-router-dom";

function Home(){
    return(
        <React.Fragment>
            <nav className="container mt-3 mb-3navbar navbar-dark bg-dark">
                <Link to="create" className="text-white h4">Create</Link><br />
                <Link to="show"className="text-white">Show</Link>
            </nav>
        </React.Fragment>
    )
}

export default Home;