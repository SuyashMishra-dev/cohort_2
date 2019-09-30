import React from 'react';

export default class Body extends React.Component {
  render() {
    return (
      <div>

        <div className="mt-5 mb-5">
          
          <div className="row no-gutters">
            
            <div className="col-md-3">
            </div>

            <div className="col-md-3">
              <img src="https://zerodha.com/static/images/largest-broker.svg" className="card-img" alt="image" />
            </div>
            
            <div className="col-md-4 ml-5 mt-5">
              <div className="card-body">
                <h5 className="card-title">Largest stock broker in India</h5>
                <p className="card-text">1.5+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                </p>
                <table className="mt-3">
                  <tr>
                   <td> 
                      <li>Futures and Options</li>
                    </td>
                    <td>
                      <li>Stocks & IPOs</li>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <li>Commodity derivatives</li>
                    </td>
                    <td>
                      <li>Currency derivatives</li>
                    </td>
                  </tr>
                
                  <tr>
                    <td>
                      <li>Direct mutual funds</li>
                    </td>
                    <td>
                      <li>Bonds and Govt. Securities</li>
                    </td>
                  </tr>
                </table>

              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5 mb-5">

          <h1>
            The Zerodha Universe
          </h1>
          <p>
            A whole ecosystem of modern investment apps tailored to specific needs, built from the ground up
          </p>
        </div>

        <div>
          <img src="https://zerodha.com/static/images/ecosystem.png" className="mx-auto d-block" />
        </div>

        <div>
          <div className="card-group mt-5 mb-5">
            
            <div className="col-md-2">
            </div>
            
            <div className="col-md-4">
              <div className="card-body">
                <h2 className="card-title">
                  Unbeatable pricing
                </h2>
                
                <p className="card-text">
                  We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                </p>
                
                <p className="card-text text-primary">
                  <small>
                    See Pricing
                  </small>
                </p>

              </div>
            </div>

            <div className="card col-md-2">
              <div className="card-body text-center">
                
                <h2 className="card-title">
                  ₹ 0
                </h2>
                
                <p className="card-text">
                  Free equity delivery and direct mutual funds
                </p>

              </div>
            </div>

            <div className="card col-md-2">
              <div className="card-body text-center">
                <h2 className="card-title">
                  ₹ 20
                </h2>
                
                <p className="card-text">
                  Intraday and F&O
                </p>
              
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5 mb-5">
          <h1>
            Open a Zerodha account
          </h1>
          
          <p>
            Excellent platforms and apps · ₹0 investments and flat ₹20 intraday and F&O trades.
          </p>
          
          <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off">
            Sign Up Now
          </button>

        </div>
      </div>
    )
  }
}

