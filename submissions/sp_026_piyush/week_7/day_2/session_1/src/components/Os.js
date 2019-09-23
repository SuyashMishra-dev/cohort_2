import React from 'react';

// const User = (props) => <div>School: {props.name}</div>;
const Os = (props) => {

    return (
        <div>
            <h1>{props.header}</h1>
            <ul>
                {props.name.map(element => <li>{element}</li>)}
            </ul>
        </div>
    );
}

export default Os;