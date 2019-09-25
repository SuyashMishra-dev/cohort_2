import React from 'react';

const Services = () => {

    return (
        <div className="row">
            <div className="col-sm-3 col-xs-12">
                <h3>Your Cart</h3>
                <ul className="list-group">
                    <li className="list-group-item"><span>Product name <span className="float-right">$12</span></span><br /><span><small className="text-muted">Brief Description</small></span></li>
                    <li className="list-group-item"><span>Second product <span className="float-right">$12</span></span><br /><span><small className="text-muted">Brief Description</small></span></li>
                    <li className="list-group-item"><span>Third Item <span className="float-right">$12</span></span><br /><span><small className="text-muted">Brief Description</small></span></li>
                    <li className="list-group-item text-success"><span>Promo code <span className="float-right">-$5</span></span><br /><span><small className="text-muted">Brief Description</small></span></li>
                    <li className="list-group-item"><span>Total(USD) <span className="float-right">$31</span></span><br /><span><small className="text-muted">Brief Description</small></span></li>
                </ul>
                <br />
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="input-group">                            
                            <input type="text" placeholder="Promo Code" className="form-control" aria-label="Amount (to the nearest dollar)" />
                            <div className="input-group-append">
                                <span className="input-group-text bg-secondary text-white">Redeem</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Services;