import React from 'react';
import styles from './mystyle.module.css';

function Offers(){
    return(
        <div className={styles.offers}>
            <p>Use {<strong>OFFER75</strong>} to Get 30% Off on Women's Clothing.</p>
        </div>
    )
}

export default Offers;