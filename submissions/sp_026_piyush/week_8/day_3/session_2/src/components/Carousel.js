import React from 'react';

const Carousel = () => {
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-interval="10000">
                    <img src='https://cdn.shopify.com/s/files/1/0173/8828/files/190718_AirPods_Charger_01_2048x.jpg?v=1563432361' className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item" data-interval="2000">
                    <img src='https://github.com/masai-school/full-stack-dev-1908/blob/master/course/week_1/day_3/resources/images/appstore.png?raw=true' className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src='https://cdn.shopify.com/s/files/1/0173/8828/files/190718_AirPods_Charger_01_2048x.jpg?v=1563432361' className="d-block w-100" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Carousel;