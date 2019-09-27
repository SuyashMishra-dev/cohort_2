import React from 'react'
import { Route, Link, BrowserRouter } from "react-router-dom";
import Home from './home'
import Contact from './contact'
import About from './about'
import FAQ from './FAQ'
import ProductsCategory from './products'

class App1 extends React.Component {
    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
                    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                        <a className="navbar-brand" style={{color: "#00897B", fontFamily : "'Turret Road', cursive", fontWeight:"bold", fontSize:40}} href="#">PROPER</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link to='/' className="nav-link" href="#">Home<span class="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/contact' className="nav-link" href="#">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/about' className="nav-link" href="#">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/FAQ' className="nav-link" href="#">FAQ'S</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/products' className="nav-link" href="#">Products</Link>
                                </li>
                            </ul>
                        </div>
                        <form>
                            <img src="http://files.softicons.com/download/business-icons/free-e-commerce-icons-by-design-bolts/png/48x48/Cart-Icon.png" alt="Shopping_cart"></img>
                        </form>
                    </nav>
                    <div>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div class="card">
                                        <img src="https://cdn.shopify.com/s/files/1/0173/8828/files/apple-watch-accessories-banner_1600x.jpg?v=1532315492" className="card-img" alt="home_img"/>
                                        <div className="card-img-overlay text-center">
                                            <h5 className="card-title" style={{color:"black"}}>Watch</h5>
                                            <p className="card-text" style={{color:"black"}}>Rest and charge your Apple watch </p>
                                            <button className="btn btn-dark">SHOP NOW</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div class="card">
                                        <img src="https://cdn.shopify.com/s/files/1/0173/8828/files/iphone-cases-mounts-stands-banner_1600x.jpg?v=1532314977" className="card-img" alt="home_img"/>
                                        <div className="card-img-overlay text-center">
                                            <h5 className="card-title" style={{color:"black"}}>iPhone</h5>
                                            <p className="card-text" style={{color:"black"}}>Cases, mounts & accessories </p>
                                            <button className="btn btn-dark">SHOP NOW</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div class="card">
                                        <img src="https://cdn.shopify.com/s/files/1/0173/8828/files/proper-deals-banner_1600x.jpg?v=1540867972" className="card-img" alt="home_img"/>
                                        <div className="card-img-overlay text-center">
                                            <h5 className="card-title" style={{color:"black"}}>Proper Deals</h5>
                                            <p className="card-text" style={{color:"black"}}>See what's currently on offer </p>
                                            <button className="btn btn-dark">SHOP NOW</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    {/* <Switch> */}
                        <Route path="/" exact component={Home}/>
                        <Route path="/contact" component={Contact}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/FAQ" component={FAQ}></Route>
                        <Route path="/products" component={ProductsCategory}></Route>
                    {/* </Switch> */}
                        <div className="row mt-3 bg-light">
                            <div className="d-flex flex-column bd-highlight mb-3 col-3">
                                <small><h6 className="p-2">Shop</h6>
                                <div className="p-2 bd-highlight">iPad</div>
                                <div className="p-2 bd-highlight">iPhone</div>
                                <div className="p-2 bd-highlight">Watch</div>
                                <div className="p-2 bd-highlight">Business</div></small>
                            </div>
                            <div className="d-flex flex-column bd-highlight mb-3 col-3">
                                <small><h6 className="p-2">Support</h6>   
                                <div className="p-2 bd-highlight">Abouts</div>
                                <div className="p-2 bd-highlight">Help</div>
                                <div className="p-2 bd-highlight">Shipping & Returns</div>
                                <div className="p-2 bd-highlight">Proper Business</div>
                                <div className="p-2 bd-highlight">Who</div></small>
                            </div>
                            <div className="d-flex flex-column bd-highlight mb-3 col-3">
                                <small><h6 className="p-2">About Studio Proper</h6>
                                <div className="p-2 bd-highlight">Studio Proper is a Melbourne based product design studio dedicated to simplifying everyday experiences with technology.</div>
                                <nav class="navbar navbar-light">
                                    <a class="navbar-brand" href="#">
                                        <img src="https://image.flaticon.com/icons/svg/733/733635.svg" style={{width:20, height:20}} className="d-inline-block align-top ml-3" alt=""/>
                                        <img src="https://image.flaticon.com/icons/svg/1384/1384030.svg" style={{width:20, height:20}} className="d-inline-block align-top ml-3" alt=""/>
                                        <img src="https://image.flaticon.com/icons/svg/733/733605.svg" style={{width:20, height:20}} className="d-inline-block align-top ml-3" alt=""/>
                                        <img src="https://image.flaticon.com/icons/svg/1077/1077042.svg" style={{width:20, height:20}} className="d-inline-block align-top ml-3" alt=""/>
                                        <img src="https://image.flaticon.com/icons/svg/733/733646.svg" style={{width:20, height:20}} className="d-inline-block align-top ml-3" alt=""/>
                                    </a>
                                </nav></small>
                            </div>
                            <div className="d-flex flex-column bd-highlight mb-3 col-3">
                                <small><h6 className="p-2">Let us send you emails?</h6>
                                <form>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form></small>
                            </div>
                        </div>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default App1;