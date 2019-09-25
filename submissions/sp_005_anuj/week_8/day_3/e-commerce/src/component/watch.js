import React from 'react';
class WATCH extends React.Component {
    render() {
        return (
            <div>
                <div className="card bg-light text-white mt-1">
                    <div className="card-img-overlay">
                        <h1 className="text-center display-3 text-light">Watches</h1>
                        <h2 className="text-center text-danger">Series 5</h2>
                        <h2 className="text-center text-light">With the new Always-On Retina display</h2>
                        <h2 className="text-center text-light">You have never seen a watch like this.</h2>
                    </div>
                    <img src="img3.webp" className="card-img img"></img>
                </div>
            </div>
        );
    }
}
export default WATCH;