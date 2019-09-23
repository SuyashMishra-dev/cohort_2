import React from 'react';

// const User = (props) => <div>School: {props.name}</div>;
const Buttons = (props) => {

    return (
        <div>
            {props.name.map((element,index) => <div><button style={{background: props.color[index]}}>{element}</button></div>)}
        </div>
    );
}

export default Buttons;