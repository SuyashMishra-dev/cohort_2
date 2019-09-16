import React from'react'

function Fcomp() {
        return(
         <div >
            <div className="flex mt-4">
                <button className="mgleft btnwidth btn btn-primary rounded-pill">JOIN US</button>
                <button className="mgleft btnwidth btn btn-secondary rounded-pill">SETTINGS</button>
            </div>
            <div className="flex mt-4">
                <button className="mgleft btnwidth btn btn-warning rounded-pill">LOGIN</button>
                <button className="mgleft btnwidth btn btn-danger rounded-pill">CONTACT US</button>
            </div>
            <div className="flex mt-4">
                <button className="mgleft btnwidth btn btn-success rounded-pill">SEARCH</button>
                <button className="mgleft btnwidth btn purple rounded-pill">HELP</button>
            </div>
            <div className="flex mt-4">
                <button className="mgleft btnwidth btn pink rounded-pill">HOME</button>
                <button className="mgleft btnwidth btn brown rounded-pill">DOWNLOAD</button>
            </div>
         </div>
        );
    }
export default Fcomp;
