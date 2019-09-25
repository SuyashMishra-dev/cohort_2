import React from 'react';

const Profile = (props) =>{
    return (
    <div className ='conatiner m-6'>
        <div className ='card col-lg-4' style= {{backgroundColor:'navy'}}>
                <div className='row'>
                    <div className='col-lg-2 mt-2'>
                        <h5 style={{backgroundColor:'yellow'}}>PRO</h5>
                    </div>
                    <div className='col-lg-7'>
                        <img src={'https://images.unsplash.com/photo-1554230505-919a13968970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60'} alt='..' className='card-img-top rounded-circle p-4 border-secondary border-solid'></img>
                    </div>
                </div>
            <div className ='card-body text center'>
                <h5 className = 'card-title text-white text-center'>{props.details.data.name}</h5>
                <p className = 'card-text text-white text-center'>{props.details.data.location}</p>
                <p className = 'card-text text-white text-center'>{props.details.data.description}</p>
                <div className='row'>
                    <button className='btn btn-primary col-lg-5 mt-2 ml-4'>Message</button>
                    <button className='btn border-primary col-lg-5 mt-2 ml-1 text-white'>Fellow</button>
                </div>
            </div>

            <br></br>

            <h2 className='card-text text-left'><small>Skills</small></h2>
            <div className = 'row' style={{backgroundColor:'blue'}}>
                
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

export default Profile;