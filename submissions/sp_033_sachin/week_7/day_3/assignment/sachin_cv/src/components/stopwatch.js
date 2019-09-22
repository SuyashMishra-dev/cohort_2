import React from 'react';

const Stopwatch = (props) => {
    // let time = '';
    // let mili = (c*1000)%1000;
    let sec = (props.count)%60;
    let min = null;
    if (Math.floor(props.count/60)>=60) {
        min = props.count%3600;
    } else {
        min = Math.floor(props.count/60);
    }    
    let hr = Math.floor(props.count/3600);
    return (
        <div>
            {`${hr}:${min}:${sec}`}
            <button onClick={props.toggle}>Start/Stop</button> 
            <button onClick={props.resetWatch}>Reset</button>
        </div>
    )
}

export default Stopwatch;