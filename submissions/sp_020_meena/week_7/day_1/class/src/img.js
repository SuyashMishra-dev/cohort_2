import React from 'react';
import './App.css';
import styles from './style.module.css';

export default function Box(){
    return(
        <div className={styles.blueback}>
            <img src = "https://upload.wikimedia.org/wikipedia/commons/2/25/Sachin_Tendulkar_at_MRF_Promotion_Event.jpg" height="100px" width="100px" className={styles.img}/>
            <h3 className = {styles.textPara}>Sachin Tendulkar</h3>
            <h4 className = {styles.textPara}>NEW YORK</h4>
            <h4 className = {styles.textPara}>User interface designer and <br></br>front-end developer</h4>
            <button  className = {styles.msgbtn}>Message</button>
            <button>Following</button><br></br>
            <p>Skills</p>
        </div>
    )
}