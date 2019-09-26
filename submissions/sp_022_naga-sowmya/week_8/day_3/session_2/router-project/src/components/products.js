import React from 'react'
import { Route, Link } from "react-router-dom";

const ProductsCategory = () => {
    return (
        <React.Fragment>
            <div className="container border border-secondary mt-3">            
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" style={{color: "#00897B", fontFamily : "'Turret Road', cursive", fontWeight:"bold", fontSize:30}}>Categories</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/products/iPads" className="nav-item nav-link" href="#">iPads <span class="sr-only">(current)</span></Link>
                            <Link to="/products/iPhones" className="nav-item nav-link" href="#">iPhones</Link>
                            <Link to="/products/Watches" className="nav-item nav-link" href="#">Watches</Link>
                        </div>
                    </div>
                </nav>
           
            <Route path="/products/iPads"
            render={()=> <Products name = "iPads" />}/>
            <Route path="/products/iPhones"
            render = {()=> <Products name = "iPhones"/>}/>
            <Route path="/products/Watches"
            render = {()=> <Products name = "Watches"/>}/>
            </div>
        </React.Fragment>
    )
}

const Products = props => {
    if(props.name === "iPads"){
        return (
            <React.Fragment>
            <div className="container rpw">
                <img className="col-6" src="https://cdn.shopify.com/s/files/1/0173/8828/products/062A1399_EDIT_580x@2x.jpg?v=1537236540"></img>
                <img className="col-6" src="https://cdn.shopify.com/s/files/1/0173/8828/products/0000s_0000s_0001_Studio_Proper_Ipad17_91676_580x@2x.jpg?v=1532309914"></img>
                <img className="col-6 mt-3" src="https://cdn.shopify.com/s/files/1/0173/8828/products/0002s_0002s_0003_Layer_6_580x@2x.jpg?v=1532309837"></img> <br />               
                <Link to="/products/iPads/Price">Price</Link>
                <Route
                    path="/products/iPads/Price"
                    render={() => {
                        return (
                        <React.Fragment>
                            <h3> Price starts from $20 </h3>
                        </React.Fragment>
                        );
                    }}
                />
            </div>
            </React.Fragment>
        )
    }
    if(props.name === "iPhones"){
        return (
            <React.Fragment>
                <div className="container mt-3 row">
                    <img className='col-6' src="https://cdn.shopify.com/s/files/1/0173/8828/products/0000s_0000s_0001_iPhone_X_Case_-_Polar_580x@2x.jpg?v=1534817879"></img>
                    <img className='col-6' src="https://cdn.shopify.com/s/files/1/0173/8828/products/Studio_Proper_IPhone_85115-2_580x@2x.jpg?v=1532310016"></img>
                </div>
            </React.Fragment>
        )
    }
    if(props.name === "Watches"){
        return(
            <React.Fragment>
                <div className="container row mt-3">
                    <img className="col-6" src="https://cdn.shopify.com/s/files/1/0173/8828/products/WATWS-G_Pac-01.250_3000x2000_859c6103-17aa-42ad-bdf6-6c6356036814_580x@2x.jpg?v=1564636547"></img>
                    <img className="col-6" src="https://cdn.shopify.com/s/files/1/0173/8828/products/180615_ConsumeriPhoneWallMount-5_580x@2x.jpg?v=1532311638"></img>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductsCategory;