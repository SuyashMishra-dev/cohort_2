import React from 'react';
class IPAD extends React.Component {
    render() {
        return (
            <div>
                <div className="card bg-light text-white mt-1">
                    <div className="card-img-overlay">
                        <h1 className="text-center display-3 text-light">iPad</h1>
                        <h2 className="text-center text-light">Like a computer</h2>
                        <h2 className="text-center text-light">Unlike any computer</h2>
                    </div>
                    <img src="img5.webp" className="card-img img"></img>
                </div>
            </div>
        );
    }
}
export default IPAD;