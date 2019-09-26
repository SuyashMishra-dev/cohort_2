import React from 'react';
function Restraunt(props) {
    return (
        <div >
            <div className="row">
                <div className="col-xl-2 ">
                    <img src={props.link}></img>
                </div>
                <div className="col-xl-2 ">
                    <h3 className="text-danger text-left ">{props.headred}</h3>
                    <h5 className="text-secondary text-left font-weight-normal">{props.type}</h5>
                    <h5 className="text-secondary text-left font-weight-normal">Cost {props.price} for One</h5>
                    <h5 className="text-left font-weight-normal"> Min {props.min}  * Up to {props.time} min</h5>
                    <h5 className="text-left font-weight-normal"> Accept online Payment only</h5>
                </div>
                <div className="col-xl-1">
                    <h5 className=" bg-success rounded text-white w-25 offset-5">{props.rate}</h5>
                    <h5 className="text-secondary text-right font-weight-normal">{props.vote} Votes</h5>
                    <h5 className="text-secondary text-right font-weight-normal">{props.review} Reviews</h5>
                </div>
            </div>
            <div className="row col-xl-5 border">
                <div className="col-xl-10"></div>
                <div className="col-xl-2">
                    <button className="h-100  text-success btn btn-white border green">Order Online ></button>
                </div>

            </div>
        </div>
    )
}
export default Restraunt;