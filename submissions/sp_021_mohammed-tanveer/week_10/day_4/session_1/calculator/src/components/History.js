import React from 'react';
import styles from './style.module.css'

function History(){
    return(
        <React.Fragment>
            <div>
                <button className={styles.historyButton}>SHOW HISTORY</button>
            </div>
        </React.Fragment>
    )
}

export default History;