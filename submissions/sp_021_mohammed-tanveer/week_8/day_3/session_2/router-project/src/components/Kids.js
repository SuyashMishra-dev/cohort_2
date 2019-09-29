import React from 'react';
import Footer from './Footer';
import styles from './mystyle.module.css';

class Kids extends React.Component{
    constructor(){
        super();
        this.state = {
            kidsProduct : [{name: 'Elaisha Girls Jumper', price: 624, image: 'https://m.media-amazon.com/images/I/81HmgFnxL-L._AC_UL320_SEARCH213888_FMwebp_QL75_.jpg'},
            {name: 'Elaisha Girls Jumper', price: 749, image: 'https://m.media-amazon.com/images/I/81OVgohoscL._AC_UL320_SEARCH213888_FMwebp_QL75_.jpg'},{name: 'Elaisha Crepe Girls Other', price: 579, image: 'https://m.media-amazon.com/images/I/81726S2eOzL._AC_UL320_SEARCH213888_FMwebp_QL75_.jpg'},
            {name: 'Elaisha Girls Jumper', price: 749, image: 'https://m.media-amazon.com/images/I/91oE5JVGbKL._AC_UL320_SEARCH213888_FMwebp_QL75_.jpg'},]
        }
    }

    render(){

        let kidsAll = this.state.kidsProduct.map(eachKids => 
            <div className={styles.newProducts}>
                <img src={eachKids.image} />
                <p>{eachKids.name}</p>
                <p className={styles.price}>Rs. {eachKids.price}</p>
                <button className={styles.productbutton}>Add to Cart</button>
            </div>
            )
        return(
            <div>
                <div className={styles.womenImagae}>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fashion/2019/August/NewSeasonAW19/1242x450-Kids-fashion._CB438830013_.jpg" width="1284"/>
                </div>
                <div className={styles.arrivalsProductsDiv}>
                    {kidsAll}
                </div>
                <div className={styles.clearAll}></div>
                <Footer />
            </div>
        )
    }
}

export default Kids;