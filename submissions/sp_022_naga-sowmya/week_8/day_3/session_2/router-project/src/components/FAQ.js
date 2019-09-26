import React from 'react'

const FAQ = () => {
    return (
        <div className="mt-3 container">
            <div className="card-deck ">
                <div className="card border-0">
                    <img src="https://image.flaticon.com/icons/svg/131/131917.svg" className="card-img-top ml-3" style={{height:100, width:100}} alt="card_1"/>
                    <div className="card-body">
                    <h5 className="card-title">Proper Helpdesk</h5>
                    <p className="card-text">Head to the Proper Helpdesk to find answers to most frequently asked questions; including complete product specifications, installation instructions and more.</p>
                    <button className="btn btn-primary">Proper Helpdesk</button>
                    </div>
                </div>
                <div className="card border-0">
                    <img src="https://image.flaticon.com/icons/svg/45/45806.svg" className="card-img-top ml-3" style={{height:100, width:100}} alt="card_2"/>
                    <div className="card-body">
                    <h5 className="card-title">Wholesale & Bulk Orders</h5>
                    <p className="card-text">Interested in placing a bulk order or becoming a Proper reseller? Get a bulk order quote, or contact one of our sales reps if you'd prefer to talk to someone directly.</p>
                    <button className="btn btn-primary">Conatact Sales</button>
                    </div>
                </div>
                <div className="card border-0">
                    <img src="https://image.flaticon.com/icons/svg/131/131155.svg" className="card-img-top ml-3" style={{height:100, width:100}} alt="card_3"/>
                    <div className="card-body">
                    <h5 className="card-title">Get in Touch</h5>
                    <p className="card-text">Questions? Comments? Just want to chat? Click through to shoot us an email. We typically respond within 48 hours during the week, and a little longer over the weekends.</p>
                    <button className="btn btn-primary">Email Proper</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default FAQ;