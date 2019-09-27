import React from 'react';

const Home = () => {
    return(
        <div>
            {/* Carousel Area */}
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://www.scnsoft.com/blog-pictures/cover-pics/react_js.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://hackernoon.com/hn-images/1*ghfEivqtCdLAFXbgBDEoyw.png" class="d-block w-100" alt="..."/>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>
    );
}

export default Home;