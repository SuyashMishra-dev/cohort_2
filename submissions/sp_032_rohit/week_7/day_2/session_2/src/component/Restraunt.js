import React from 'react';

function Restraunt(props) {
    return (
        <div className="m-5">

            <div className="row">

                <div className="col-3"></div>

                <div className="card mb-3 col-6 p-0">

                    <div className="row no-gutters">

                        <div className="col-md-3">
                            <img  src={props.link} className="card-img" alt="..."/>
                        </div>

                        <div className="col-md-4">
                            <div className="card-body p-1 pl-3">
                                <h2 className="card-title text-danger m-0">{props.head}</h2>
                                <p className="card-text">{props.type}</p>
                                <p className="card-text"><small className="text-muted">Cost {props.price} for One</small></p>
                                <p className="card-text"><small className="text-muted">Min ₹ {props.min}  . Up to {props.time} min</small></p>
                                <p className="card-text">Accept online Payment only</p>
                            </div>
                        </div>

                        <div className="col-md-2 p-3">
                            <h5 className="btn btn-success text-right text-white offset-5 mb-1">{props.rate}</h5>
                            <h5 className="text-secondary text-right font-weight-normal">{props.vote} Votes</h5>
                            <h5 className="text-secondary text-right font-weight-normal">{props.review} Reviews</h5>
                        </div>

                    </div>

                    <div className="border text-right m-0 p-0">
                        <div>
                            <button type="button" className="btn btn-outline-success">Order Online ></button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Restraunt;