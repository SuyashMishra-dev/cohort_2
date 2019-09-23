import React from'react'

function Card()
{
    return(
        
                <div class="col-xl-3 card purple "> 
                <img class="rounded-circle col-xl-4 offset-4 mt-4" src="https://cdn.pixabay.com/photo/2014/09/17/18/45/girl-449797_1280.jpg"></img>
                <div className="text-center text-white"><h3>Ricky Park</h3></div>
                <div className="text-center text-white">NEW YORK</div>
                <div className="text-center text-white">User interface designer and front-end developer</div>
                <div className="flex text-center mt-2">
                    <button className="offset-3 btn bluebtn">Message</button>
                    <button className="btn purple text-info border border-info">Following</button>    
                </div>
                <p className="text-white ml-3">SKILLS</p>
                <div className="row ml-3 mt-1">
                    <div className="border border-secondary ml-1 col-xl-2 text-white">UI/UX</div>
                    <div className="border border-secondary ml-1 col-xl-5 text-white">Front End Develpment</div>
                    <div className="border border-secondary ml-1 col-xl-3 text-white">HTML</div>
                </div>
                <div className="row ml-3 mt-1">
                   <div className="col-xl-2 ml-1 border border-secondary text-white">CSS</div>
                   <div className="col-xl-3 ml-1 border border-secondary text-white">Javascript</div>
                   <div className="col-xl-2 ml-1 border border-secondary text-white">React</div>
                   <div className="col-xl-2 ml-1 border border-secondary text-white">Node</div>
                </div>
                </div>
       
    );
}
export default Card;
