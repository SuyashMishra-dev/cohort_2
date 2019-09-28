import React from 'react';
import Footer from './Footer';
import styles from './mystyle.module.css'

class Women extends React.Component{
    constructor(){
        super();
        this.state = {
            womenProduct : [{name: 'Miss Chase Womens Cotton Shift Dress', price: 779, image: 'https://m.media-amazon.com/images/I/51JSAFU6FxL._AC_UL320_SEARCH213888_FMwebp_QL75_.jpg'},
            {name: 'Miss Chase Womens Bodycon Dress (Black)', price: 659, image: 'https://m.media-amazon.com/images/I/51gBuC+KzFL._AC_UL320_SEARCH213888_FMwebp_QL75_.jpg'},{name: 'Miss Chase Womens Bodycon Dress', price: 739, image: 'https://m.media-amazon.com/images/I/51rfMnypn9L._AC_UL320_SEARCH213888_FMwebp_QL75_.jpg'},
            {name: 'Miss Chase Womens Navy Blue Skater Dress', price: 460, image: 'https://m.media-amazon.com/images/I/51aSbydWgjL._AC_UL320_SEARCH213888_FMwebp_QL75_.jpg'},]
        }
    }

    render(){

        let womenAll = this.state.womenProduct.map(eachWomen => 
            <div className={styles.newProducts}>
                <img src={eachWomen.image} />
                <p>{eachWomen.name}</p>
                <p className={styles.price}>Rs. {eachWomen.price}</p>
                <button className={styles.productbutton}>Add to Cart</button>
            </div>
            )
        return(
            <div>
                <div className={styles.womenImagae}>
                    <img src="https://m.media-amazon.com/images/G/31/img19/Fashion/WA19/NEW_SEASON19/WA-NS-Clothing-3000x770-PC._CB437593574_.jpg" width="1284"/>
                </div>
                <div className={styles.arrivalsProductsDiv}>
                    {womenAll}
                </div>
                <div className={styles.clearAll}></div>
                <Footer />
            </div>
        )
    }
}

export default Women;