import React from "react";

const Resturant = (props) => {
  return (
      <div className="border border-dark mx-5 my-5">
        <div className="row col-md-12 ">
         
            <div className="col-md-4">
                <img src={props.src} className="mt-2 ml-3" width="300px" height="200px" alt="food"/>
                    </div>
                    <div className="col-lg-6 ml-6">
                        <h1 className="text-dark mt-5 ml-5">{props.name}</h1>
                        {props.container.map(n => <span className="text-warning mt-5 ml-5"> {n} </span>)}
                        <p className="text-dark ml-5 mt-2">Cost {props.cost} for one</p>
                        <p className="text-muted ml-5">Accepts:- {props.payment}</p>
                    </div>
                    <div className="col-lg-2 mt-5">
                    <p className="badge badge-primary text-wrap">{props.review} reviews</p>
                        <h3 className="mt-3 text-success">Rating:-{props.rating}</h3>
                        <p><strong>{props.votes} votes</strong></p>
                      
                    </div>
		        </div>
		        <div>
		        </div>
	        </div>
    );
}

export default Resturant;