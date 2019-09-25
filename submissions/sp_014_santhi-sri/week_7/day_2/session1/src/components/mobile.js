import React from 'react'

function mobile(props){
    const mobData = props.mobileData.map(ele =>(<li>{ele}</li>))
    const heading = props.head
    return(
        <div>
            <h1>{heading}</h1>
            <ul>
            {mobData}
            </ul>        
        </div>
    )
   
}
export default mobile