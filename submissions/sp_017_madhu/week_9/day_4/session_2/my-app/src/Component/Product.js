import React from "react";
import {  Link } from "react-router-dom";

const Product = (props) => {
  return (
      <div >
        <div className="row col-md-5 border border-dark my-3">
         
            <div className="col-md-12">
                <img src={props.src} className="mt-2 ml-3" width="300px" height="200px" alt="food"/>
                    </div>
                    <div className=" ml-5">
                        <p className="text-dark text-center ml-5">{props.name}</p>
                        <p className="text-center ml-5">Size:- {props.container.map(n => <span className="text-dark "> {n} </span>)}</p>

                        <p className="text-dark ">Cost:- ₹ {props.cost}</p>
                        <Link to="/DisplayMore" >See More</Link>
                        {/* <p className="text-muted ml-5">Accepts:- {props.payment}</p>
                    
                        <p className="badge badge-primary text-wrap">{props.review} reviews</p>
                        <p className="mt-3 text-success">Rating:-{props.rating}</p>
                        <p><strong>{props.votes} votes</strong></p> */}
                       {/* <button > Add to cart</button> */}
                    </div>
		        </div>
		        <div>
		        </div>
	        </div>
    );
}

export default Product;