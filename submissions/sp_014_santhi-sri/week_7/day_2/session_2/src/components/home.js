import React from 'react'

const Home = (props) => {
    
                return (
                    <div class="card mb-3 col-6 " style={{ maxWidth: "540px" }}  >
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src={props.details.images} class="card-img" alt="..." />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title text-danger ">{props.details.name}<span className="bg-success text-white float-right">{props.details.rating}</span></h5>
                                    <p class="card-text text-muted">{props.details.cuisine}</p>
                                    <p class="card-text">Min 30/- <span className="mx-4">Upto 30 min</span></p>
                                    <p class="card-text">Accepts online payments only</p>

                                </div>
                            </div>
                        </div>
                        <div class="card-footer bg-transparent border-secondary"><span><button type="button" class="btn btn-light btn-outline-secondary float-right">Order Online</button></span></div>
                    </div>
                )  
 
}
export default Home