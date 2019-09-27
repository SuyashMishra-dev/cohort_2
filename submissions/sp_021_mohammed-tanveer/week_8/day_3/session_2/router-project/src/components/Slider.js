import React from 'react';
import styles from './mystyle.module.css';

function Slider(){
    return(
        <div className={styles.sliderDiv}>
            <div className={styles.mainslider}>
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/Fashion/October/AIFWAPPONLY/900x500._CB277216301_.jpg" />
            </div>
            <div className={styles.minislider}>
                <img className={styles.minisingle} src="https://www.turkishsouq.com/image/cache/catalog/islamicclothingmobil-800x500.jpg" width="365" />
                <img src="https://content.shopback.com/my/wp-content/uploads/2017/04/18142203/ZALORAYA2018-CW13-W-HERO-DESK-800x500.jpg" width="365" />
            </div>
        </div>
    )
}

export default Slider;