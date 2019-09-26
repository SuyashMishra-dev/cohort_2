import React from "react";

function FirstDiv()
{
    return(
        <div>
            <button>
                <img style={{width: 1355, height: 1200, marginLeft: -20}} src="https://cdn.vox-cdn.com/thumbor/jn_Pwdws3uMbtPS7I0oLTOJCK4s=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19206400/akrales_190914_3666_0245.jpg"></img>
            </button>
            <div className="text-center" style={{marginTop: -1170}}>
                <h1 className="text-light">iPhone 11 Pro</h1>
                <h3 className="text-light">Pro Cameras. Pro display. Pro performance.</h3>
                <p className="text-muted">From $24.95/mo. or $599 wit trade-in.*</p>
            </div>
        </div>
    )
}

export default FirstDiv;