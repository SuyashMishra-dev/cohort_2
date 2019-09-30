import React from 'react';
import Sidebar from './Layouts/Sidebar';
import Navbar from './Layouts/Navbar';
import generalStyles from './general.module.css';
import {Link} from 'react-router-dom'
import CollectionRoutes from './Routes/CollectionRoutes';

class App extends React.Component {
    constructor(props){
        super(props);

    }


    render() {
        return (
            <>
                <div className="container-fluid">
                    <div style={{height:"5724.47px"}} className="row">
                        <div style={{minHeight:"100%"}} className={`col-md-2 p-0 ${generalStyles.bgcolor}`}>   
                            <Sidebar />
                        </div>
                        <div className="col-md-10 p-0">
                            <Navbar />
                            <CollectionRoutes />
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default App;