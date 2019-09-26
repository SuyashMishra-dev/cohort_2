import React from "react";

export default class Contact extends React.Component {
    render() {
      return (
        <div className="row">
            <div className="col-md-4">
            </div>
            <div className="card border-success m-5 text-center col-md-4">
                <div className="card-header bg-transparent border-success">Contact Us</div>
                <div className="card-body text-success">
                    <h5 className="card-title"></h5>
                    <p className="card-text">+91 80 4040 2020<br/>
                                            © 2010 - 2019, Zerodha Broking Ltd.<br/>
                                            All rights reserved.
                    </p>
                </div>
                <div className="card-footer bg-transparent border-success">Customer Care 24X7</div>
            </div>
        </div>
    );
}
}
