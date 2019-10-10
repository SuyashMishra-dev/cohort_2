import React from "react";

class Home extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        
        return (
            <>
            <div className="container-fluid">
                <div className="row p-0">
                    <img src="/images/living_1.jpg" style={{width:"100%"}} className="border border-primary" />
                    <h1 style={{zIndex:"10",position:"relative",top:"-250px",left:"70%"}} className="display-3 text-white">Royal System</h1>
                    <h2 style={{zIndex:"10",position:"relative",top:"-150px",left:"60%"}} className="float-right text-white">Shop Now</h2> 
                </div>              
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
            </>
        )
    }
}

export default Home;