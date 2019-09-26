import React from 'react';
import styles from './mystyle.module.css';

function HomeBanner(){
    return(
        <div className={styles.homeBannerDiv}>
            <div className={styles.bannerText}>
                <h1 className={styles.arrivalsText}>What Are You Looking For?</h1>
            </div>
            <div >
                <img className={styles.homeimage} src="https://m.media-amazon.com/images/G/31/img19/Fashion/WA19/NEW_SEASON19/NAV/westernwear._CB439306027_.jpg" width="600"/>
                <img className={styles.homeimage} src="https://m.media-amazon.com/images/G/31/img19/Fashion/WA19/NEW_SEASON19/NAV/Ethnicwear._CB439306027_.jpg" width="600"/>
            </div>
            <div>
                <img className={styles.homeSingle} src="https://m.media-amazon.com/images/G/31/img19/Fashion/WA19/NEW_SEASON19/1._SX3000_QL85_.jpg" width="1225" />
            </div>
        </div>
    )
}

export default HomeBanner;