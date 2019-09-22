import React from 'react';

let sec, min, hr;

const Timer = (props) => {
    sec = Math.floor(props.data.tCounter % 60);
    if(sec < 10) {
        sec = '0' + sec;
    }
    
    min = Math.floor(props.data.tCounter / 60);
    if(min < 10) {
        min = '0' + min;
    }

    hr = Math.floor(props.data.tCounter / 3600);
    if(hr < 10) {
        hr = '0' + hr;
    }
    
    return (
        // <div>{hr}:{min}:{sec}</div>

        <div>
            <h1>{hr}:{min}:{sec}</h1>
        </div>
    )
}

export default Timer;