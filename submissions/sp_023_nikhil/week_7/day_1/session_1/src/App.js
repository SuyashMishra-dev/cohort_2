import React from 'react';
import OS from './components/a1/OS';
import Mobile from './components/a1/Mobile'
import Buttons from './components/a2/Buttons'
import Card from './components/a3/Card'
import styles from './components/a1/lists.module.css';


const Lists= () => {
    return(
        <div  className={styles.adj}>
            <OS />
            <Mobile />
            <Buttons />
            <Card />
        </div>
    )
}

export default Lists 