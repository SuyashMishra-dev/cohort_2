import React from 'react';
import Footer from './Footer';
import styles from './mystyle.module.css';

function About(){
    return(
        <div>
            <div className={styles.about}>
                <h2>About Us</h2>
                <p>Mysite.com is a young and vibrant company that aims to provide good quality branded products. Mysite caters to the fashion needs of men, women and kids across footwear, apparel, jewellery and accessories.<br/><br/>Shopping is fun and exhilarating and more so when you can shop 24x7 without leaving the comfort of home. This in simpler words is what we call Mysite.com! Online shopping at Mysite.com is convenient and affordable. You can find your desired products more quickly and easily using our user-friendly online shopping platform. Fill your cart up to the brim in just a few seconds and get swift home delivery for all orders. All of this topped with our exclusive offers makes for an exciting, irresistible combo!</p>
            </div>
            <Footer />
        </div>
    )
}

export default About;