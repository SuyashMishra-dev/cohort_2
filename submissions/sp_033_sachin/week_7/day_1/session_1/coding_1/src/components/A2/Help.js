import React from 'react';
import styles from './styles.module.css'; 

const help = () => {
    return (
        <button className={styles.help+' '+styles.radius}>Help</button>
    );
}

export default help;    