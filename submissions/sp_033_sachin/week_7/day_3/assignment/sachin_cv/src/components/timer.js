import React from 'react';

const Timer = (props) => {
    let inSec = props.value;
    let sec = (inSec)%60;
    let min = null;
    if (Math.floor(inSec/60)>=60) {
        min = inSec%3600;
    } else {
        min = Math.floor(inSec/60);
    }    
    let hr = Math.floor(inSec/3600);

    return (
        <div>
            <input type="text" onChange={(e)=>{props.setTimerInput(e)}} value={props.value}  />
            <button onClick={props.toggleTimer}>Start/Stop</button>
            <button onClick={props.resetTimer}>Reset</button>
            <div>
            {`${hr}:${min}:${sec}`}
            </div>
        </div>
    )
}

export default Timer;