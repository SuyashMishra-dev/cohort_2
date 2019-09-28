import React from 'react';
import styles from './mystyle.module.css';

class HomeArrivals extends React.Component{
    constructor(){
        super();
        this.state = {
            newItems: [{name: 'Miss Chase Womens Cotton Shift Dress', price: 779, image: 'https://m.media-amazon.com/images/I/51JSAFU6FxL._AC_UL320_SEARCH213888_FMwebp_QL75_.jpg'},          {name: 'Miss Chase Womens Bodycon Dress (Black)', price: 659, image: 'https://m.media-amazon.com/images/I/51gBuC+KzFL._AC_UL320_SEARCH213888_FMwebp_QL75_.jpg'},{name: 'Miss Chase Womens Bodycon Dress', price: 739, image: 'https://m.media-amazon.com/images/I/51rfMnypn9L._AC_UL320_SEARCH213888_FMwebp_QL75_.jpg'},{name: 'Miss Chase Womens Navy Blue Skater Dress', price: 460, image: 'https://m.media-amazon.com/images/I/51aSbydWgjL._AC_UL320_SEARCH213888_FMwebp_QL75_.jpg'},{name: 'VERO MODA Womens Cotton Skater Dress', price: 857, image: 'https://m.media-amazon.com/images/I/81uBo+cGEHL._AC_UL320_SEARCH213888_FMwebp_QL75_.jpg'},{name: 'Veni VIDI VICI Maroon Bandage Bardot Skater Dress', price: 849, image: 'https://m.media-amazon.com/images/I/61dP-uricjL._AC_UL320_SEARCH213888_FMwebp_QL75_.jpg'},{name: 'VERO MODA Womens Skater Synthetic Mini Dress', price: 1449, image: 'https://m.media-amazon.com/images/I/81uDJ0XE-NL._AC_UL320_SEARCH213888_FMwebp_QL75_.jpg'},{name: 'Texco WomenS Off White Dresses', price: 959, image: 'https://m.media-amazon.com/images/I/71QOG5NgrLL._AC_UL320_SEARCH213888_FMwebp_QL75_.jpg'},]
        }
    }
        
    render(){

        let eachNewProduct = this.state.newItems.map(eachNew => 
            <div className={styles.newProducts}>
                <img src={eachNew.image} />
                <p>{eachNew.name}</p>
                <p className={styles.price}>Rs. {eachNew.price}</p>
                <button className={styles.productbutton}>Add to Cart</button>
            </div>)

        return(
            <div>
                <div className={styles.newArrivalsTag}>
                    <h1 className={styles.arrivalsText}>New Arrivals</h1>
                </div>
                <div className={styles.arrivalsProductsDiv}>
                    {eachNewProduct}
                </div>
            </div>
        )
    }
}

export default HomeArrivals;