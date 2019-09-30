import React from 'react'

const Contact = () => {
    return(
        <div className="mt-3 container">
            <div className="card">
                <img src="https://cdn.shopify.com/s/files/1/0173/8828/files/help-banner_1600x.jpg?v=1532314117" class="card-img" alt="contact_img"/>
                <div className="card-img-overlay">
                    <h2 className="card-title text-left" style={{color:"black"}}>Need Help?</h2>
                    <h5 className="card-text text-black-60 text-left" style={{color:"black"}}>We got you.</h5>
                </div>
            </div>
            
            <div className="row mt-3">
                <div className="col-6">
                    <small>
                        <h5>Shipping</h5>
                        <p>
                            <p>Orders are typically processed within 24 hours from one of our regional fulfilment centres. However, orders placed on a Friday will most likely be processed on the following Monday. Keep this in mind if you are selecting express or overnight shipping.Proper ships via Australia Post and USPS globally. We update our Facebook and Twitter accounts regularly with production and shipping timelines if we expect any delays during periods of heavy demand.</p>
                            <p>Standard ground shipping is offered at no cost on all orders. We also offer express shipping for an additional fee. Express shipping options and associated fees are calculated during checkout based on real time shipping rates. It is important to note that our standard (free) shipping service does not include tracking information. Shipping time frames depend on your location and vary depending on the shipping method, as well your local customs processing times for International orders.</p>
                            <p>Import Taxes: Please be aware that International orders may attract an additional cost for import taxes upon receipt.</p>
                            <p>We strongly recommend that you dispatch to a reliable address, as Proper is not responsible for lost or stolen orders.</p>
                            <p>Physical addresses are preferred, as we are unable to guarantee the safety of items delivered to PO Boxes or Parcel Lockers.</p>
                        </p>
                    </small>
                </div>

                <div className="col-6">
                    <small>
                        <h5>Returns & Exchanges</h5>
                        <p>
                            <p>If for any reason you have changed your mind about your purchase, or the item you received is faulty, damaged, or otherwise not as described on our website, we offer a full refund (excluding shipping costs) for up to 30 days from the original purchase date.</p>
                            <p>To claim a return or exchange, please contact our Customer Support Team (via the link below) with your Order Number, reason for your return, and (if applicable) evidence/photos of any product faults. We will be happy to ship you a new item, or refund the price you paid for the product (excluding shipping costs).</p>
                            <p>To be eligible for a return, your item must be unused and in the original packaging (in a resellable condition). We will review your email and provide you with a return merchandise authorisation (RMA) prior to shipping your product back to us. Please make sure the returned product is carefully wrapped and provide a tracking number (if possible) for all return items, as we are unable to refund items that are damaged due to improper protection and we are not responsible for lost or damaged products being returned to us.</p>
                            <p>We ask that you allow up to 5 working days for us to process your refund after we have received your returned item. Once we have inspected the item and assessed that it is in an acceptable condition, we will credit the original payment method according to the processing time of your bank.</p>
                            <p>Please click here to request a return or exchange.</p>
                        </p>
                    </small>
                </div>
            </div>
        </div>
    )
}

export default Contact;