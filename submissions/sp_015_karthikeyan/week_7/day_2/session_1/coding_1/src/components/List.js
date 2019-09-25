import React from 'react';

const List = (props) => {
    return (
        <div>
            {console.log(props)}
            {props.listItems.map(ele => <li key={ele.toString()}>{ele}</li>)}
        </div>
    )
}

export default List;