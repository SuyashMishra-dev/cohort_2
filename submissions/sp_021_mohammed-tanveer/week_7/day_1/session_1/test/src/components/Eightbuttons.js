import React from 'react';
import styles from './mystyle.module.css';

export default function Button(probs){
    return(
    <div>
        {/* <div> */}
          <button className = {styles.join}>{probs.name}</button>
          {/* <button className = {styles.settings}>SETTINGS</button>
        </div>
        <div>
          <button className = {styles.login}>LOGIN</button>
          <button className = {styles.contact}>CONTACT US</button>
        </div>
        <div>
          <button className = {styles.search}>SEARCH</button>
          <button className = {styles.help}>HELP</button>
        </div>
        <div>
          <button className = {styles.home}>HOME</button>
          <button className = {styles.download}>DOWNLOAD</button>
        </div> */}
    </div>
    )
}