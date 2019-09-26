import React from 'react'; 
import styles from './mystyle.module.css';

function Contact (){
    return(
        <div className={styles.pageheader}>
            <h1>Contact Us</h1>
            <p>Company: Dunzo</p>
            <p>Phone: +91 7019697670</p>
            <p>Address: 70, Kormangala, Bangalore</p>
        </div>
    )
}

export default Contact;