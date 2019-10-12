import React from 'react';
import styles from './style.module.css'

function Header(){
    return(
        <React.Fragment>
            <div className={styles.headerDiv}>
                <h1 className={styles.headerTitle}>CALCULATOR</h1>
            </div>
        </React.Fragment>
    )
}

export default Header;