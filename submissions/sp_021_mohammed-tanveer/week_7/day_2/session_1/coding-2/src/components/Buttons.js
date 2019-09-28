import React from 'react';
import styles from './mystyle.module.css';

const Buttons = (props) => {

    
    return(
        <div>
           <button className={props.allColors}>{props.allLabels}</button>
        </div>
    )
}

export default Buttons