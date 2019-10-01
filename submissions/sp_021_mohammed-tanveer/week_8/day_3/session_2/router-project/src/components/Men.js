import React from 'react';
import Footer from './Footer';
import styles from './mystyle.module.css';

class Men extends React.Component{
    constructor(){
        super();
        this.state = {
            menProduct : [{name: 'Lee X-Line Mens Solid Slim fit T-Shirt', price: 449, image: 'https://m.media-amazon.com/images/I/81K+xrpUcHL._AC_UL320_SEARCH213888_FMwebp_QL75_.jpg'},
            {name: 'Bradstreet by Arrow Men Plain Regular Fit Polo Shirt', price: 449, image: 'https://m.media-amazon.com/images/I/81bZC6cFF4L._AC_UL320_SEARCH213888_FMwebp_QL75_.jpg'},{name: 'Van Heusen Mens Printed Slim fit Polo', price: 649, image: 'https://m.media-amazon.com/images/I/91dI2PMtrmL._AC_UL320_SEARCH213888_FMwebp_QL75_.jpg'},
            {name: 'United Colors of Benetton Mens Solid Regular Fit Polo', price: 649, image: 'https://m.media-amazon.com/images/I/91qYKkvxABL._AC_UL320_SEARCH213888_FMwebp_QL75_.jpg'},]
        }
    }

    render(){

        let menAll = this.state.menProduct.map(eachMen => 
            <div className={styles.newProducts}>
                <img src={eachMen.image} />
                <p>{eachMen.name}</p>
                <p className={styles.price}>Rs. {eachMen.price}</p>
                <button className={styles.productbutton}>Add to Cart</button>
            </div>
            )
        return(
            <div>
                <div className={styles.womenImagae}>
                    <img src="https://m.media-amazon.com/images/G/31/img19/Fashion/MA19/NewSeason/banner/NS-MA-Header-3000x770-PC._SX3000_QL85_.jpg" width="1284"/>
                </div>
                <div className={styles.arrivalsProductsDiv}>
                    {menAll}
                </div>
                <div className={styles.clearAll}></div>
                <Footer />
            </div>
        )
    }
}

export default Men;