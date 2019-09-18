import React from 'react';
import styles from './styles.module.css'; 

const login = () => {
    return (
        <button className={styles.login+' '+styles.radius}>login</button>
    );
}

export default login;    