import React from 'react';

const MobileData = (props) => {
    let list = props.list.map((el,i)=><li key={i.toString()+'id'}>{el}</li>)
    return(
        <ul>
            {list}
        </ul>
    )
}
export default MobileData;