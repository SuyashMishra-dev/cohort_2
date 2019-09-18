import React from 'react'
import clipart from '../../clipart1985979.png'

function Card() {
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
                <h5 className = 'card-title'>Ricky Park</h5>
                <p className = 'card-text'>NEW YORK</p>
                <p className = 'card-text'>User Interface Designer and front-end developer</p>
                <div className="row">
                    <button className="btn btn-primary col-lg-5 mt-2 ml-4">Message</button> 
                    <button className="btn col-lg-5 mt-2  ml-1 text-white border-primary">Following</button>
                </div>
            </div>
            <hr></hr>
            <p className = 'card-text text-left'><small>SKILLS</small></p>
            <div className = 'row'>
                <button className = 'btn border-secondary text-white'><small>UI / UX</small></button>
                <button className="btn border-secondary ml-1 text-white"><small>Front End Development</small></button>
                <button className="btn border-secondary ml-1 text-white"><small>HTML</small></button>
                <button className="btn border-secondary ml-1 text-white"><small>CSS</small></button>
                <button className="btn border-secondary ml-1 mt-1 text-white"><small>Javascript</small></button>
                <button className="btn border-secondary ml-1 mt-1 text-white"><small>React</small></button>
                <button className="btn border-secondary ml-1 mt-1 text-white"><small>Node</small></button>

            </div>

        </div>
        </div>
    )
}

export default Card