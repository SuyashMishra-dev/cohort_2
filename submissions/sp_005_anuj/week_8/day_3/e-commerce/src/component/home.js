import React from 'react';
import './style.css'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
class Home extends React.Component {
    render() {
    return( 
        <div>
            {/* iPhone 11 pro section */}
           
           <div style = {{backgroundColor: 'black',height: '500px'}} className = "text-light text-center mt-5" >
                <h1 className = "mt-5">iPhone 11 Pro</h1>
                <h2>Pro Camera.Pro display. Pro Performances</h2>
                <p>From $24.95/mo. or $599 with trade-in.*</p>
                <div className = "row">
                    <a href="#" className = "col-6"><h5 className = "float-right">Learn More ></h5></a>
                    <a href="#" className = "col-6"><h5 className = "float-left">Buy Now > </h5></a>
                </div>  
                <img src = "img1.png" className = "w-100" style = {{heoght:"200px"}}></img>
           </div>

            {/* iPhone 11 pro section ends */}

            {/* iPhone 11 section */}

            <div className="card bg-light text-white mt-1">
                <div className="card-img-overlay">
                    <h1 className="text-center display-3 text-dark">iPhone 11</h1>
                    <h2 className="text-center text-dark">Just the right amount of everything</h2>
                </div>
                <img src="img2.jpg" className="card-img img"></img>
            </div>  

            {/* iPhone 11 section ends here */}

            {/* watches section */}

            <div className="card bg-light text-white mt-1">
                <div className="card-img-overlay">
                    <h1 className="text-center display-3 text-light">Watches</h1>
                    <h2 className="text-center text-danger">Series 5</h2>
                    <h2 className="text-center text-light">With the new Always-On Retina display</h2>
                    <h2 className="text-center text-light">You have never seen a watch like this.</h2>
                </div>
                <img src="img3.webp" className="card-img img"></img>
            </div>  

            {/* watches section ends here */}

            {/* ipad and macbook section */}

            <div className = "row">
                <div className="card bg-light text-white mt-1 col-6">
                    <div className="card-img-overlay">
                        <h1 className="text-center text-light display-3">MacBook Air</h1>
                        <h4 className="text-center text-light"> Lightness strike again.</h4>
                    </div>
                    <img src="img4.webp" className="card-img img"></img>
                </div>
                <div className="card bg-light text-white mt-1 col-6">
                    <div className="card-img-overlay">
                        <h1 className="text-center display-3 text-light">iPad</h1>
                        <h2 className="text-center text-light">Like a computer</h2>
                        <h2 className="text-center text-light">Unlike any computer</h2>
                    </div>
                    <img src="img5.webp" className="card-img img"></img>
                </div>
            </div> 

            {/* ipad and macbook section ends here */}

            {/* tv and card section starts from here */}
            <div className = "row text-light m-1">
                <div className= " col-6 jumbotron">
                   <h1>tv+</h1>
                    <div className="row">
                        <a href="#" className="col-6"><h6 className="float-right">Learn More</h6></a>
                        <a href="#"><h6>Buy</h6></a>
                    </div>
                </div>    
                <div className = "col-6 jumbotron">
                    <h1>Card is here.</h1>
                    <h6>Get 3% Daily Cash on purchases from Apple</h6>
                    <h6>using Apple Card</h6>
                    <div className = "row">
                        <a href="#" className = "col-6"><h6 className = "float-right">Learn More</h6></a>
                        <a href="#"><h6>Buy</h6></a>
                    </div>
                </div>
            </div>

            {/* tv and cards section ends here */}
        </div>
    );
    }
}
export default Home;