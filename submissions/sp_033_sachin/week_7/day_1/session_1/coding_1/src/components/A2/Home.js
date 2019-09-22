import React from 'react';
import styles from './styles.module.css'; 

const home = () => {
    return (
        <button className={styles.home+' '+styles.radius}>Home</button>
    );
}

export default home;    