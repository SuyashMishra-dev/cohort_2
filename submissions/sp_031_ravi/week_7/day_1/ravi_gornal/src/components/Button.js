import React from 'react'
import './../App.css'

function Button() {
    return (
        <div>
            <div className="row">
                <button style={{color:"white",background:"#61dafb",borderRadius:"15px",width:"120px"}}>Join Us</button>
                <button style={{color:"white",background:"#90c7d6",borderRadius:"15px",width:"120px",marginLeft:"25px"}}>SETTINGS</button>
            </div>
            <div className="row">
                <button style={{color:"white",background:"#ebab21",borderRadius:"15px",width:"120px"}}>LOGIN</button>
                <button style={{color:"white",background:"#b31f1f",borderRadius:"15px",width:"120px",marginLeft:"25px"}}>CONTACT US</button>
            </div>
            <div className="row">
                <button style={{color:"white",background:"#3c6b1c",borderRadius:"15px",width:"120px"}}>SEARCH</button>
                <button style={{color:"white",background:"#302b75",borderRadius:"15px",width:"120px",marginLeft:"25px"}}>HELP</button>
            </div >
            <div className="row">
                <button style={{color:"white",background:"#cc3dad",borderRadius:"15px",width:"120px"}}>HOME</button>
                <button style={{color:"white",background:"#887f03",borderRadius:"15px",width:"120px",marginLeft:"25px"}}>DOWNLOAD</button>
            </div>        
        </div>
    )
}

export default Button;