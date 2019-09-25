import React from 'react';
class IPHONE extends React.Component {
    render() {
        return (
            <div>
                <div className="card bg-dark text-white">
                    <div className="card-img-overlay mt-5">
                        <h1 className="text-center display-3 ">iPhone 11 Pro</h1>
                        <h2 className="text-center">Pro Cameras. Pro display. Pro pereformance.</h2>
                    </div>
                    <img src="img1.jpg" className="card-img img"></img>
                </div>

                <div className="card bg-light text-white mt-1">
                    <div className="card-img-overlay">
                        <h1 className="text-center display-3 text-dark">iPhone 11</h1>
                        <h2 className="text-center text-dark">Just the right amount of everything</h2>
                    </div>
                    <img src="img2.jpg" className="card-img img"></img>
                </div>
            </div>
        );
    }
}
export default IPHONE;