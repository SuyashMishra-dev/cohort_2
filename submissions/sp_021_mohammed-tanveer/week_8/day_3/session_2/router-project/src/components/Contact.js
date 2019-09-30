import React from 'react';
import Footer from './Footer';
import styles from './mystyle.module.css'

function Contact(){
    return(
        <div>
            <div className={styles.about}>
                <h1>Contact Us Now</h1>
                <h4>Mysite.com India Pvt Ltd.</h4>
                <p>Phone: +91 0000000011</p>
                <p>Address: 85 Kormangala, Bangalore - 56095</p>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;