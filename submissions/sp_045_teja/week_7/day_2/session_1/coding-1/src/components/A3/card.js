import React from 'react'
import clipart from '../../clipart1985979.png'


const Card = (props) => {
    return(
        <div className = 'container m-5' >
        <div className = 'card  col-lg-4' style= {{backgroundColor: "violet"}}>
            <div className = 'row'>
                <div className = 'col-lg-4'>
                <h5 style= {{backgroundColor: "yellow"}}>PRO</h5>
                </div>
                <div className = 'col-lg-4'>
                    <img src = {clipart}  alt= '...'  className="card-img-top rounded-circle p-2"></img>
                </div>
            </div>
            <div className= 'card-body text-center'>
                <h5 className = 'card-title'>{props.details.data.name}</h5>
                <p className = 'card-text'>{props.details.data.location}</p>
                <p className = 'card-text'>{props.details.data.description}</p>
                <div className="row">
                    <button className="btn btn-primary col-lg-5 mt-2 ml-4">Message</button> 
                    <button className="btn col-lg-5 mt-2  ml-1 text-white border-primary">Following</button>
                </div>
            </div>
            <hr></hr>
            <p className = 'card-text text-left'><small>SKILLS</small></p>
            <div className = 'row'>
               {props.details.data.skills.map(element => {
                   return(
                   <button key={element.toString()} className="btn border-secondary mx-1 my-1 text-white"><small>{element}</small></button>
                   )
               })}

            </div>

        </div>
        </div>
    )
}

export default Card