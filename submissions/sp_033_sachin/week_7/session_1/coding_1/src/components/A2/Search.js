import React from 'react';
import styles from './styles.module.css'; 

const search = () => {
    return (
        <button className={styles.search+' '+styles.radius}>search</button>
    );
}

export default search;    