import React from 'react'


const gitdata = (props) => {
    return (
        <div>
            <img src={props.input.avatar_url}></img>
            <p>{props.input.login}</p>
            <a href = {props.input.html_url} target = "_blank" >More Info..</a>           
        </div>
    )

}
export default gitdata