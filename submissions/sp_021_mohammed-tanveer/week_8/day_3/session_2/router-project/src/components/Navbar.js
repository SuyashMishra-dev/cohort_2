import React from 'react';
import { Route, Link, BrowserRouter } from "react-router-dom";
import styles from './mystyle.module.css';

class Navbar extends React.Component{
    constructor(){
        super();
        this.state = {
            menuLinks: [{name: 'Home', url: '/'},
                        {name: 'Fashion', url: '/fashion'},
                        {name: 'Women Clothing', url: '/fashion/women'},
                        {name: 'Men Clothing', url: '/fashion/men'},
                        {name: 'Kids Clothing', url: '/fashion/kids'},
                        {name: 'Current Trends', url: '/current'}]
        }
    }

    render(){
        let allLinks = this.state.menuLinks.map(eachLink => <Link className={styles.linkTag} to={eachLink.url}>{eachLink.name}</Link>);

        return(
            <div className={styles.menubar}>
                <div className={styles.logo}>
                    <Link to="/"><img src="http://logok.org/wp-content/uploads/2014/03/MasterCard-Logo.png" width="100"/></Link>
                </div>
                <div className={styles.navbardiv}>
                    {allLinks}
                </div>
                <div>
                    <img src="https://i2.wp.com/sewmac.co.uk/wp-content/uploads/2014/03/iconmonstr-shopping-cart-4-icon-256.png" width="60"/>
                </div>
            </div>
        )
    }
}

export default Navbar;