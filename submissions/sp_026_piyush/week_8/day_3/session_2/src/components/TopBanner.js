import React from 'react';

const TopBanner = () => {
    return (
    
      <div id="topBanner" className="mt-3">
        <div className="row"></div>
        <div className="row" style={{marginTop: '300px'}}>
          <div className="col-4 offset-2" >
            <h2>Wireless Charger for Airpods</h2>
            <h6 className="mb-4">Keep your AirPods always within arm's reach, always charged.</h6>
            <button className="btn btn-info btn-lg">Pre-Order Now</button>
          </div>
        </div>
      </div>
    );
  };

export default TopBanner;