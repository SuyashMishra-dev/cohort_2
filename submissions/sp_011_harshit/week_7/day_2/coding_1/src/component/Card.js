import React from 'react';
import './Card.css';

function Card(props){
    return(
        <div className="purple  w-25" >
            <img className="rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLJoUuYsLDgb1dDQLWqNGX3nxK4wMBVVuxvAYLDIDCFl5u1Z92"></img>
            <h3 className="text-white">{props.items.name}</h3>
            <h5 className="text-white">{props.items.location}</h5>
            <p className="text-white mt-4">{props.items.description}</p>
            <div className="row offset-3 col-xl-12  ">
                <button className="btn w-25 border border-secondary btn text-white  text-dark cyan ">Message</button>
                <button className="btn w-25 text-info border border-info ml-3">Follow</button>

            </div>
            <div className="purple2 col-xl-12 mt-4">
                    {props.items.skills.map(a=>
                        <button className="border border-secondary btn text-white col-xl-3 ml-3 mt-3">{a}</button>

                    )}
            </div>


        </div>
    )


}
export default Card;
