import React from 'react';
import pic from '../50x50.png'


const Card = (props) => {
    return (
        <div className="container m-5 text-center p-4" style={{backgroundColor: "#28223f"}}>
            <div className="card col-lg-4 offset-lg-4 p-4" style={{backgroundColor: "#231e39"}}>
                <img src={pic} className="card-img-top border rounded-circle p-2" />
                <div className="card-body text-white">
                    <h5 className="card-title">{props.properties.data.name}</h5>
                    <p className="card-text">{props.properties.data.location}</p>
                    <p className="card-text">{props.properties.data.description}</p>
                    <div className="row">
                    <button className="btn btn-primary col-lg-5 m-1 ml-4">Message</button> 
                    <button className="btn col-lg-5 m-1 text-white border-primary">Following</button>
                    </div>
                    <hr></hr>
                    <p className="card-text text-left"><small>Skills</small></p>
                    <div className="row">
                        {props.properties.data.skills.map(ele => {
                            return(
                                <button key={ele.toString()} className="btn border-secondary mx-1 my-1 text-white"><small>{ele}</small></button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;