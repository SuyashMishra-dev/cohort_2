import React from 'react';
import styles from './app.module.css'

class SimpleList2 extends React.Component{
    render(){
        return (
    <div>
        <p>
            <button type="button" className={styles.button1}>JOIN US</button>
            <button type="button" className={styles.button2}>SETTINGS</button>
        </p>
        <p>
            <button type="button" className={styles.button3}>LOG IN</button>
            <button type="button" className={styles.button4}>CONTACT US</button>
        </p>
        <p>
            <button type="button" className={styles.button5}>SEARCH</button>
            <button type="button" className={styles.button6}>HELP</button>
        </p>
        <p>
            <button type="button" className={styles.button7}>HOME</button>
            <button type="button" className={styles.button8}>DOWNLOAD</button>
        </p>
    </div>
 );
}
}

export default SimpleList2;