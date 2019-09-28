import React from 'react';
import Footer from './Footer';
import styles from './mystyle.module.css'

function Cancel(){
    return(
        <div>
            <div className={styles.about}>
                <h1>Cancellation Policy</h1>
                <p>Mysite's returns and exchange policy gives you an option to return or exchange items purchased on Mysite for any reason within the specified return/exchange period (check product details page for the same). We only ask that you don't use the product and preserve its original condition, tags, and packaging. You are welcome to try on a product but please take adequate measure to preserve its condition.<br/><br/>If you had selected Cash on Delivery, there is no amount to be refunded because you haven't paid for your order. For payments made via Credit Card, Debit Card, Net Banking, or Wallet you will receive refund into the source account within 7-10 days from the time of order cancellation. If payment was made by redeeming PhonePe wallet balance then, refund will be initiated into Phonepe wallet within a day of your order cancellation, which can be later transferred into your bank account, by contacting PhonePe customer support team.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Cancel;