import React from 'react';

const Contact = () => {

    return (
        <div className="container bg-light">
        <div className="row mt-4">
            <div className="col-sm-9 col-xs-12">
                <h3>Billing Address</h3>
                
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="firstName">First Name</label>
                                <input type="text" className="form-control" id="firstName" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="lastName">Last Name</label>
                                <input type="text" className="form-control" id="lastName" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="username">Username</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">@</div>
                                </div>
                                <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="email">Email<span className="text-muted">(Optional)</span></label>
                            <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                        </div>
                        <div className="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="form-group">
                            <label for="inputAddress2">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2"/>
                                placeholder="Apartment, studio, or floor">
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label for="inputCity">Country</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputState">State</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="inputZip">Zip</label>
                                <input type="text" className="form-control" id="inputZip" />
                            </div>
                        </div>
                        
                        <hr />
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" for="gridCheck">
                                    Shipping Address is the same as my billing Address
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" for="gridCheck">
                                    Save this information for next time
                                </label>
                            </div>
                        </div>
                        <hr />
                        <h3>Payment</h3>                        
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                            <label className="form-check-label" for="exampleRadios1">
                                Credit 
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                            <label className="form-check-label" for="exampleRadios2">
                                Debit
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                            <label className="form-check-label" for="exampleRadios2">
                                Paypal
                            </label>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="name">Name</label>
                                <input type="text" className="form-control" id="name" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="creditCard">Credit Card Number</label>
                                <input type="text" className="form-control" id="creditCard" />
                            </div>
                            <p><small className="text-muted">Full Name as displayed on the card</small></p>
                        </div>
                        
                    </form>
                
            </div>
            
        </div>

    </div>
    )
}

export default Contact;