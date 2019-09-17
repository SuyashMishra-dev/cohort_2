import React from 'react';
import styles from './styles.module.css'; 

const settings = () => {
    return (
        <button className={styles.settings+' '+styles.radius}>settings</button>
    );
}

export default settings;    