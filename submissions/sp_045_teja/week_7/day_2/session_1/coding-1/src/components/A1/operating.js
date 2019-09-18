import React from 'react'

const Operating = (props) => {
    return(
        <div>
            {props.Operating.map(element => <li key={element.toString()}>{element}</li>)}
        </div>
    )
}

export default Operating