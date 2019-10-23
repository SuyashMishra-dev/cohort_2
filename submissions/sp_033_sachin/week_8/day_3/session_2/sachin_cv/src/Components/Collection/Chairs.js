import React from "react";
import CollectionNav from "../../Layouts/CollectionNav";

class Chairs extends React.Component {
    constructor(props){
        super(props);
        
    }

    render() {

        return (
            <div className="container-fluid"> 
                <CollectionNav category="Chairs" />                           
                <div className="row">
                    <div className="col-md-3 border border-danger">
                        
                    </div>
                    <div className="col-md-3 border border-danger">
                        xyz
                    </div>
                    <div className="col-md-3 border border-danger">
                        xyz
                    </div>
                    <div className="col-md-3 border border-danger">
                        xyz
                    </div>
                    <div className="col-md-3 border border-danger">
                        xyz
                    </div>
                </div>

            </div>
        )
    }
}

export default Chairs;