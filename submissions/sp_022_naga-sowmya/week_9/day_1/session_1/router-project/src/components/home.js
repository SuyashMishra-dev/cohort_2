import React from 'react'

const Home = () => {
    return(
        <div className="mt-3 container">
            <div class="card">
                <img src="https://cdn.shopify.com/s/files/1/0173/8828/files/190718_AirPods_Charger_01_1600x.jpg?v=1563432361" className="card-img" alt="home_img"/>
                <div className="card-img-overlay">
                    <h5 className="card-title" style={{color:"black"}}>Wireless charger for Airpods</h5>
                    <p className="card-text" style={{color:"black"}}>Keep your airpods always within arm's reach, always charged </p>
                    <button type="button" className="btn btn-outline-primary align-bottom">Pre-order Now</button>
                </div>
            </div>
        </div>
    )
}

export default Home;