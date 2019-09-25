import React from 'react';
import styles from './mystyle.module.css';

function Home (){
    
    return(
        <div>
            <div className={styles.header}>
                <h1>Many needs, one app</h1>
                <h2>Groceries, food, or pet supplies? Get it dun!</h2>
                <div className={styles.searchform}>
                    <input className={styles.searchInput} teype="text" placeholder="Search for a Location" />
                    <button className={styles.searchbutton}>Proceed</button>
                </div>
                <p>BANGALORE, PUNE, GURGAON, HYDERABAD, NEW DELHI, CHENNAI,NOIDA</p>
            </div>
            <div className={styles.homeSecond}>
                <div className={styles.eachItem}>
                    <img src="https://www.dunzo.com/_next/static/images/partner-ef8a221ccd9245ae52751d595112e2cc.jpg" width="500"/>
                    <h2>Love to ride and save the day?</h2>
                    <p>One-stop solution to all your delivery needs. You can earn up to ₹30,000 each month and log in and out when they please. All you need is a bike and a smartphone.</p>
                    <button className={styles.homeButton}>Become a Dunzo partner</button>
                </div>
                <div className={styles.eachItem}>
                    <img src="https://www.dunzo.com/_next/static/images/merchant-cbf2c079016deec2a5c47d241fa7174f.jpg" width="500"/>
                    <h2>Your business can go places</h2>
                    <p>Does your business need on-demand, hyperlocal deliveries? Dunzo for Business is the one-stop solution you’re looking for with live tracking and express support.</p>
                    <button className={styles.homeButton}>Get your business on Dunzo</button>
                </div>
            </div>

        </div>
    )
}

export default Home;