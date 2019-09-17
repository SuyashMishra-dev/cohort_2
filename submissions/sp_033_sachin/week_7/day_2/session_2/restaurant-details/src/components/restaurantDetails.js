import React from 'react';


const restaurantDetails = (props) => {

    return (
        <div>            
            <div className="card mb-3" style={{maxWidth:"540px"}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={"https://via.placeholder.com/150"} className="card-img h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="position-absolute" style={{left:"320px"}}><button className="btn btn-success">{props.data.ratings}</button></div>
                        <div className="position-absolute" style={{left:"330px",top:"40px"}}>{props.data.votes}</div>                        
                        <div className="card-body">
                            <h5 className="card-title">{props.data.name}</h5>                            
                            <p className="card-text">Min: {props.data.min}</p>
                            <p className="card-text">Card Payment{props.data.cardPayments?"Accepted!":"Not Accepted"}</p>
                            <hr />
                            <button className="mb-2 btn btn-outline-success float-right">Order Online</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default restaurantDetails;