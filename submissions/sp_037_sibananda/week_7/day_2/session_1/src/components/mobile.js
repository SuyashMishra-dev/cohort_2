import React from 'react'
// import ReactDOM from 'react-dom'

const Mobile=(props) => {
    
    return(
        <div>
            <h1>mobile Operating System</h1>
            
            
            
            <ul>{props.mobileInfo.os.map((osName)=><li>{osName}</li>)}</ul>
            <h1>Mobile Manufacturers</h1>
            <ul>{props.mobileInfo.man.map((manufacturers)=><li>{manufacturers}</li>)}</ul>

        </div>
    )
}
export default Mobile;