import React from "react";

function Support()
{
    return(
        <div>
            <img style={{width: "100%", height: 550}} src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/hero-banner-homepage.image.large_2x.jpg" />
            <div className="text-center" style={{marginTop: -500}}>
                <h1>Welcome to Apple Support</h1>
                <input type="text" placeholder="Search Support" style={{width: 500}}></input>
            </div>
        </div>
    )
}

export default Support;