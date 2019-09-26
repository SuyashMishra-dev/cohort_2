import React from 'react';

const About = () => {
    return (
        <>
            <div className="container bg-light">
                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                    <div className="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 className="display-4 font-weight-normal">About Us</h1>
                        <p className="lead font-weight-normal">We are nobody from nobody company. We are the greatest at doing nothing. We are the world leaders in it.</p>
                        <button className="btn btn-outline-secondary" >Don't Click</button>
                    </div>
                    <div className="product-device shadow-sm d-none d-md-block"></div>
                    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                </div>
            </div>
        </>
    )
}

export default About