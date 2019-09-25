import React from 'react';

const Home = () => {

    return (
        <div className="container-fluid shadow">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center bg-primary p-2 mt-2 text-light">Home</h1>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-md-8 col-xs-12 mt-4">
                                <h1 className="display-4">Sources say China used iPhone hacks to target Uyghur Muslims</h1>
                                <h5>Zack Whittaker</h5>
                                <img src="http://via.placeholder.com/1000x500" className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-4 col-md-4 col-xs-12 mt-4">
                                <h1>Meet Olli 2.0, a 3-D printed autonomous shuttle</h1>
                                <h5>Kristen Korosec</h5>
                                <hr />
                                <p className="text-warning"><strong>Extra Crunch</strong></p>
                                <h1>Meet Olli 2.0, a 3-D printed autonomous shuttle</h1>
                                <h5>Kristen Korosec</h5>
                                <hr />
                                <h1>Meet Olli 2.0, a 3-D printed autonomous shuttle</h1>
                                <h5>Kristen Korosec</h5>
                                <hr />
                                <h1>Mark Benioff will discuss building a socially responsible and successful startup at TechCrunch Disrupt</h1>
                                <h5>Ron Miller</h5>
                                
                            </div>
                            <div className="offset-lg-0 col-lg-2 col-md-8 offset-md-2 col-xs-12 mt-4">
                                <h1 className="text-success display-4">Disrupt SF 2019</h1>
                                <h1>Early Bird Pricing extended 1 week </h1>
                                <h5 className="text-success">SanFrancisco</h5>
                                <p>Oct2-4</p>
                                <button type="button" className="btn btn-outline-success btn rounded-0"><h5>Save$1300Today</h5></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;