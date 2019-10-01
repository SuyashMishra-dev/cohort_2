import React from 'react';
import styles from './mystyle.module.css';
import Footer from './Footer';
import { Route, Link, BrowserRouter } from "react-router-dom";
import Women from './Women';

function Fashion(){
    return(
        <div className={styles.fashionDiv}>
            <div>
                <img src="https://assets.jassets.com/assets/images/retaillabs/2019/7/3/b42f2e03-e510-488e-bae0-dbe6735e10eb1562152285232-westernwear.webp" width="600" />
                <img src="https://assets.jassets.com/assets/images/retaillabs/2019/7/3/6cd7c792-733b-4199-9808-b3e42dd9b9ae1562152285277-ethnicwear.webp" width="600" />
            </div>
            <div>
                <img src="https://assets.jassets.com/assets/images/retaillabs/2019/7/3/0000cbc6-e972-4d26-aaa6-0981d5164ae41562153063056-Casual.webp" width="600" />
                <img src="https://assets.jassets.com/assets/images/retaillabs/2019/7/3/1b41f731-c9b4-42e8-8e10-725faae3cb781562153063028-Formal-wear.webp" width="600" />
            </div>
            <div>
                <img src="https://assets.jassets.com/assets/images/retaillabs/2019/7/3/28bdd4a5-d75f-4a2a-92f8-aef1ce2c59fa1562152285239-sportswear.webp" width="600" />
                <img src="https://assets.jassets.com/assets/images/retaillabs/2019/7/3/216fb497-391a-46b4-a94c-d06920083d741562152285268-footwear.webp" width="600" />
            </div>
            <div>
                <img src="https://assets.jassets.com/assets/images/retaillabs/2019/4/25/0d63a4a7-429f-4999-8664-a62e01a1aca91556182215056-desktop-trends_01.webp" width="600" />
                <img src="https://assets.jassets.com/assets/images/retaillabs/2019/4/25/50fe3406-f0fd-455c-8411-120a95c424251556182215047-desktop-trends_02.webp" width="600" />
            </div>
            
            <Footer />
            
        </div>
    )
}

export default Fashion;