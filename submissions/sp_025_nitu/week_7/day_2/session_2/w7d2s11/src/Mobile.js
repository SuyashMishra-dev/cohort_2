import React from "react";

function Mobile(props)
{
    console.log(props.list)
    return(
        <div>
            <h1>Mobile Operating Systems</h1>
            <ul>
                <li>{props.list.os[0]}</li>
                <li>{props.list.os[1]}</li>
                <li>{props.list.os[2]}</li>
                <li>{props.list.os[3]}</li>
            </ul>
            <h1>Mobile Manufacturer</h1>
            <ul>
                <li> {props.list.man[0]}</li>
                <li> {props.list.man[1]}</li>
                <li> {props.list.man[2]}</li>
                <li> {props.list.man[3]}</li>
            </ul>
        </div>
    )
}

export default Mobile;