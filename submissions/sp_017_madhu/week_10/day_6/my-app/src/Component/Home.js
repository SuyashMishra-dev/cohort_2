import React from "react";
import {  Link } from "react-router-dom";
// import Issue from "./Issue";
import Create from "./Create";
import Show from "./Show"
// import PlayListRedux from ".././PlayListRedux";


export default class Home extends React.Component {
    render() {
        return (
            <div>   
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                </ol>
                <div class="carousel-inner">

                <div className="carousel-item active">
                    <img src="https://static.vecteezy.com/system/resources/previews/000/427/062/original/cricket-stadium-vector.jpg" className="d-block w-100" alt="first"/>
                    </div> 
                    <div class="carousel-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqUYDkq3S-6AA8nMAmH_pLzQNRb4uYK2sCV9hWIKfYi3J3Rzsa" className="d-block w-100" alt="first"/>
                    </div>
                    <div className="carousel-item"> <Link to="/Create" class="nav-item nav-link active text-dark">Create</Link>
                        
                    <img src="https://image.freepik.com/free-vector/modern-cricket-stadium-background_23-2147947551.jpg" className="d-block w-100 h-400" alt="second"/>
                   
                    </div>
                    <div class="carousel-item">
                    <Link to="/Show" className="nav-item nav-link active text-dark" >Show</Link>
                    <img src="https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAJDI2ZGQxMzdmLTM3MWYtNDQ0Ni1hZTMzLThhNjkzMzVkZDM4Yg?fit=letterbox&w=1200&h=800&bg=000000&auto=enhance,compress&q=80" className="d-block w-100" alt="third"/>
                    </div>

                   <div class="carousel-item">
                    <img src="https://2.hlimg.com/images/stories/738X538/eden-gardens1_0.jpg" className="d-block w-100" alt="first"/>
                    </div>

                    <div className="carousel-item ">
                    <img src="https://static.vecteezy.com/system/resources/previews/000/427/062/original/cricket-stadium-vector.jpg" className="d-block w-100 h-400" alt="first"/>
                    </div> 
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
            </div>

        )
    }
}

{/* <div className="card bg-light text-light">
                
<img src="https://static.vecteezy.com/system/resources/previews/000/427/062/original/cricket-stadium-vector.jpg" className="card-img" alt="stadium"/>


<div className="card-img-overlay">
<Link to="/Create" class="nav-item nav-link active text-light" >Create</Link>
    <Link to="/Show" class="nav-item nav-link active text-light" >Show</Link>

<h4 className="card-title text-center bg-danger font-weight-bold mt-5">
    The key is not the will to win… everybody has that.<br /> It is the will to prepare to win that is important.
</h4>
<h4 className="card-title text-dark text-center font-weight-bold">
      - Facilities Service Desk
</h4>
    
</div>
</div> */}