import React from 'react';


const MobileOs = (props) => {

    let list = props.list.map(el=><li>{el}</li>)

    return (
        <ul>
            {list}
        </ul>
    )

}

export default MobileOs;