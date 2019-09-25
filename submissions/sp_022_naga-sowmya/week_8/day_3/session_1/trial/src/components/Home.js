import React from 'react';

const Home = () => {
    return (
        <div >
            <div className="card bg-dark text-white">
                <img src="https://www.tesla.com/content/dam/tesla-site/home-page/images/main-hero-desktop_compressed.jpg" className="card-img" alt="tesla" style={{height:600}}/>
                <div className="card-img-overlay text-center">
                    <h1 className="card-title">Model 3</h1>
                    <p className="card-text">An American automotive </p>
                    <button type="button" className="btn btn-success">CUSTOM ORDER</button>
                </div>
            </div>
        </div>
    )
}
export default Home;