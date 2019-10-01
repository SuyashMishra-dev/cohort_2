import React from "react";

function Mobile(props)
{
    // console.log(props)
    
    return(
        <div>
            <h1>Mobile Operating System</h1>
            <ul>
                <li>{props.list.Os[0]}</li>
                <li>{props.list.Os[1]}</li>
                <li>{props.list.Os[2]}</li>
                <li>{props.list.Os[3]}</li>
            </ul>
            <h1>Mobile Manufacturer</h1>
            <ul>
                <li>{props.list.Manufacturer[0]}</li>
                <li>{props.list.Manufacturer[1]}</li>
                <li>{props.list.Manufacturer[2]}</li>
                <li>{props.list.Manufacturer[3]}</li>
            </ul>
        </div>
    )
}

export default Mobile;