import React from 'react';
import Header from './Header'
import styles from './style.module.css'
import Display from './Display';
import Keys from './Keys';
import History from './History';

function Home(){
    return(
        <React.Fragment>
            <div className={styles.body}>
                <Header />
                <Display />
                <Keys />
                <History />
            </div>
        </React.Fragment>
    )
}

export default Home;