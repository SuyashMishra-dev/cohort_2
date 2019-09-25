import React from 'react';

const Card = (props) => {
    // console.log(props);
    return (
        <div>
            {/* {props.name}
            {props.payment}
            {props.votes}
            {props.reviews}
            {props.categories}
            {props.costForOne} */}
            <div>
                <div className="row col-lg-8 ">
                    <div className="col-lg-2">
                        <img src={props.src} className="img mt-2" alt=""/>
                    </div>
                    {/* {console.log(props.src)} */}
                    <div className="col-lg-4 ml-2">
                        <h1 className="text-danger">{props.name}</h1>
                        {/* <p className="text-muted">{props.categories}</p> */}
                        {props.categories.map(n => <span className="text-muted"> {n} </span>)}
                        <p className="text-muted">Cost {props.costForOne} for one</p>
                        <p>{props.payment}</p>
                    </div>
                    <div className="col-lg-2">
                        <h3>{props.rating}</h3>
                        <p>{props.votes} votes</p>
                        <p>{props.reviews} reviews</p>
                    </div>
		        </div>
		        <div>
		        </div>
	        </div>
        </div>
    );
}

export default Card;