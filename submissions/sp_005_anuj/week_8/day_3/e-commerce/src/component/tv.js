import React from 'react';
class TV extends React.Component {
    render() {
        return (
            <div>
                <div className="card bg-dark text-white">
                    <div className="card-img-overlay mt-5">
                        <h1 className="text-center display-3 text-light ">tv+</h1>
                        <h2 className="text-center text-light">Stories to believe in.</h2>
                    </div>
                    <img src="img7.jpg" className="card-img img"></img>
                </div>
            </div>
        );
    }
}
export default TV;