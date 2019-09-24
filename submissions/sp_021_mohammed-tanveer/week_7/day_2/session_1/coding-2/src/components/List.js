import React from 'react';

const List = (props) => {

    let mobileData = props.allNames.map(allNames => <li>{allNames}</li>);
    return(
        <div>
            <h1>{props.allHeading}</h1>
            <ul>
                {mobileData}
            </ul>
        </div>
    )
}

export default List