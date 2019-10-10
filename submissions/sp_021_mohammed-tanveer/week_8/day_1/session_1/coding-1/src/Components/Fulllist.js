import React from 'react';

function Fulllist(props){

    let showFullList = props.fullData.map(eachItem => {
        return(
            <ul>
                <li>{eachItem.name}</li>
            </ul>
        )
    })
    
    return(
        <React.Fragment>
            {showFullList}
        </React.Fragment>
    )
}

export default Fulllist;