import React from 'react';
import styles from './mystyle.module.css'
import { Route, Link, BrowserRouter } from "react-router-dom";

function Footer(){
    return(
        <div className={styles.footerMain}>
            <div className={styles.footerText}>
                <h3>THE ULTIMATE DESTINATION FOR ONLINE SHOPPING IN INDIA</h3>
                <p>If you would like to experience the best of online shopping for men, women and kids in India, you are at the right place. Mysite.com is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. It is time to redefine your style statement with our treasure-trove of trendy items. Our online store brings you the latest in designer products straight out of fashion houses. You can shop online at Mysite from the comfort of your home and get your favourites delivered right to your doorstep.</p>
            </div>
            <div className={styles.footerDiv}>
                <div className={styles.eachFooter}>
                    <h2>Quick Links</h2>
                    <Link to="/fashion">Fashion Trends</Link><br/>
                    <Link to="/account">My Account</Link><br/>
                    <Link to="/about">About Us</Link><br/>
                    <Link to="/cancel">Canclation Policy</Link><br/>
                    <Link to="/contact">Contact Us</Link>
                </div>
                <div className={styles.eachFooter}>
                    <h2>Contact Us Now</h2>
                    <h4>Mysite.com India Pvt Ltd</h4>
                    <p>Registered: Bhive, Kormangala, Bangalore - 560027</p>
                </div>
                <div className={styles.eachFooter}>
                    <h2>Subscribe Us Now</h2>
                    <input className={styles.footerInput} type="text" placeholder="Enter Your Email Id"/>
                    <button className={styles.footerButton}>Subscribe</button>
                    <h4>Follow Us On</h4>
                    <div className={styles.socialLinks}>
                        <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=256&h=256" width="40"/>
                        <img src="http://www.pngall.com/wp-content/uploads/2016/07/Twitter-Download-PNG.png" width="40"/>
                        <img src="https://rugbyamericasnorth.com/wp-content/uploads/2017/07/youtube-icon-64px.png" width="40"/>
                        <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG36.png" width="40"/>
                    </div>
                </div>
            </div>
            <div className={styles.copright}>
                <p>Copyright @ Mysite.com 2019</p>
            </div>
        </div>
    )
}

export default Footer;