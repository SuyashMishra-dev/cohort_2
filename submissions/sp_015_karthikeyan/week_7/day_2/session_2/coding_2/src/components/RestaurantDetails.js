import React from 'react';
import pic from '../150x150.png';

const RestaurantDetails = (props) => {
    let i = -1;
    console.log(props)
    return(
        <div>
            {props.details.map(ele => {
                i++;
                return(
                    <div className="card mb-3" style={{maxWidth: "540px"}} key={i}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={pic} className="rounded"></img>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h4 className="text-danger">{ele.name}</h4>
                                    <p className="card-text m-0"><small className="text-muted">{ele.categories}</small></p>
                                    <p className="card-text m-0"><small className="text-muted">Cost ₹{ele.cost} for one</small></p>
                                    <p className="card-text m-0"><small>Min ₹50 - Up to 30 min</small></p>
                                    <p className="card-text m-0"><small>Accepts {ele.payments} Payments Only</small></p>
                                </div>
                            </div>
                            <div className="col-md-2 text-right">
                                <p className="btn btn-success m-2">{ele.rating}</p>
                                <p className="mx-2 my-0"><small>{ele.votes} votes</small></p>
                                <p className="mx-2"><small>{ele.reviews} reviews</small></p>
                            </div>
                        </div>
                        <hr className="mb-0"></hr>
                        <div className="col-md-4 offset-md-8 bg-success text-center">
                            <p className="mt-3 text-white">Order Online ></p>
                        </div>    
                    </div>
                    
                )
            })}
        </div>
    )
}

export default RestaurantDetails;