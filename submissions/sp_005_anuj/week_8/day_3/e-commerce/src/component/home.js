import React from 'react';
import './style.css'
class Home extends React.Component {
    render() {
    return( 
        <div>
            {/* iPhone 11 pro section */}

            <div className="card bg-dark text-white">
                <div className="card-img-overlay mt-5">
                    <h1 className="text-center display-3 ">iPhone 11 Pro</h1>
                    <h2 className="text-center">Pro Cameras. Pro display. Pro pereformance.</h2>
                </div>  
                <img src="img1.jpg" className="card-img img"></img>
            </div>  

            {/* iPhone 11 pro section ends */}

            {/* iPhone 11 section */}

            <div className="card bg-light text-white mt-1">
                <div className="card-img-overlay">
                    <h1 className="text-center display-3 text-dark">iPhone 11</h1>
                    <h2 className="text-center text-dark">Just the right amount of everything</h2>
                </div>
                <img src="img2.jpg" className="card-img img"></img>
            </div>  

            {/* iPhone 11 section ends here */}

            {/* watches section */}

            <div className="card bg-light text-white mt-1">
                <div className="card-img-overlay">
                    <h1 className="text-center display-3 text-light">Watches</h1>
                    <h2 className="text-center text-danger">Series 5</h2>
                    <h2 className="text-center text-light">With the new Always-On Retina display</h2>
                    <h2 className="text-center text-light">You have never seen a watch like this.</h2>
                </div>
                <img src="img3.webp" className="card-img img"></img>
            </div>  

            {/* watches section ends here */}

            {/* ipad and macbook section */}

            <div className = "row">
                <div className="card bg-light text-white mt-1 col-6">
                    <div className="card-img-overlay">
                        <h1 className="text-center text-light display-3">MacBook Air</h1>
                        <h4 className="text-center text-light"> Lightness strike again.</h4>
                    </div>
                    <img src="img4.webp" className="card-img img"></img>
                </div>
                <div className="card bg-light text-white mt-1 col-6">
                    <div className="card-img-overlay">
                        <h1 className="text-center display-3 text-light">iPad</h1>
                        <h2 className="text-center text-light">Like a computer</h2>
                        <h2 className="text-center text-light">Unlike any computer</h2>
                    </div>
                    <img src="img5.webp" className="card-img img"></img>
                </div>
            </div> 

            {/* ipad and macbook section ends here */}

        </div>
    );
    }
}
export default Home;