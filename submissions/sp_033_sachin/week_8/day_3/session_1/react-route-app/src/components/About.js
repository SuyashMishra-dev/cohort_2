import React from 'react';

const About = () => {

    return (
        <div className="container-fluid">
            <div className="row text-center">
                <div style={{ height: "70px" }} className="pt-3 col-xs-12 bg-dark text-secondary w-100">
                    <h2>Harry Potter</h2>
                </div>
            </div>
            <div className="container shadow">
                {/* <!-- carousel starts --> */}
                <br />
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://images.unsplash.com/photo-1505832018823-50331d70d237?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1382&q=80" className="d-block w-100" alt="Harry Potter" />
                        </div>
                            <div className="carousel-item">
                                <img src="https://images.unsplash.com/photo-1479888230021-c24f136d849f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="d-block w-100" alt="Ron Weasly" />
                        </div>
                                <div className="carousel-item">
                                    <img src="https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="d-block w-100" alt="Hermoinee" />
                        </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <br />
                            {/* <!-- carousal ends here --> */}
                            <h1 className="text-center bg-info text-secondary">Staff</h1>
                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-sm-12">
                                    <div className="card staff">
                                        <img style={{ height: "300px" }} src="" className="img-fluid card-img-top staffImg" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text staffAbt"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-sm-12">
                                    <div className="card staff">
                                        <img style={{ height: "300px" }} src="" className="img-fluid card-img-top staffImg" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text staffAbt"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-sm-12">
                                    <div className="card staff">
                                        <img style={{ height: "300px" }} src="" className="img-fluid card-img-top staffImg" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text staffAbt"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-sm-12">
                                    <div className="card staff">
                                        <img style={{ height: "300px" }} src="" className="img-fluid card-img-top staffImg" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text staffAbt"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />

                            <h1 className="text-center bg-info text-secondary">Students</h1>
                            <div className="row">
                                <div className="col-md-3 col-sm-6 col-sm-12">
                                    <div className="card staff">
                                        <img style={{ height: "300px" }} src="" className="img-fluid card-img-top studentsImg" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text studentsAbt"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-sm-12">
                                    <div className="card staff">
                                        <img style={{ height: "300px" }} src="" className="img-fluid card-img-top studentsImg" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text studentsAbt"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-sm-12">
                                    <div className="card staff">
                                        <img style={{ height: "300px" }} src="" className="img-fluid card-img-top studentsImg" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text studentsAbt"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-sm-12">
                                    <div className="card staff">
                                        <img style={{ height: "300px" }} src="" className="img-fluid card-img-top studentsImg" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text studentsAbt"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
            
                        
                        </div>
                    </div>
                
            
            )
}

export default About;