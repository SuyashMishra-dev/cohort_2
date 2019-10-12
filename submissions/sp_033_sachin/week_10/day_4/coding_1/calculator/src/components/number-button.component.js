import React from 'react';
import styles from './calculator-grid.module.css'

const NumberButton = ({children,handleClick}) => (
    <div onClick={handleClick} className={styles.numberButtons}>
        {children}
    </div>
)

export default NumberButton;