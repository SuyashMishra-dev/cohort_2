import React from "react";

export default class Contact extends React.Component {
    render() {
      return (
          <div>
        <div className="row">
            <div className="col-md-4">
            </div>
            <img className="col-md-5" src="https://www.zestmoney.in/wp-content/uploads/2019/07/support.png"/>
        </div>
        <div className="row">
            <div className="col-md-4">
            </div>
            <div className="card border-success m-5 text-center col-md-4">
                <div className="card-header bg-transparent border-success">Contact Us</div>
                <div className="card-body text-success">
                    <h5 className="card-title"></h5>
                    <p className="card-text">Call: +91 80 1234 5678<br/>
                                            Email: support@abcxyz.com<br/>
                                            All rights reserved.
                    </p>
                </div>
                <div className="card-footer bg-transparent border-success">Customer Care 24X7</div>
            </div>
        </div>
        </div>
    );
}
}
