import React from 'react';

const List = (props) => {
    return (
        <div>
            {props.List.map(element => <li key={element.toString()}>{element}</li>)}
        </div>
    )
}

export default List;