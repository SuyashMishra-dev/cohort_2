import React from 'react'
import { Route, BrowserRouter } from "react-router-dom";
import AllProducts from './AllProducts'

const productArr = [{name: "iPads",price: "$ 40.00",id: "iPads", url:"https://cdn.shopify.com/s/files/1/0173/8828/products/062A1399_EDIT_580x@2x.jpg?v=1537236540"},
                    {name: "iPhones",price: "$79.95",id: "iPhones",url:"https://cdn.shopify.com/s/files/1/0173/8828/products/Studio_Proper_IPhone_85115-2_580x@2x.jpg?v=1532310016"},
                    {name: "Watches",price: "$55.68",id: "Watches",url:"https://cdn.shopify.com/s/files/1/0173/8828/products/WATWS-G_Pac-01.250_3000x2000_859c6103-17aa-42ad-bdf6-6c6356036814_580x@2x.jpg?v=1564636547"},
                    {name:"Power Uno Wireless Charger", price:"$39.95", id: "power-uno",url:"https://cdn.shopify.com/s/files/1/0173/8828/products/Power-Uno_19-07-08_Studio-Shoot_Black-Profile_005_3000x2000_7c339d77-9aaa-4b8d-9216-576df753cf09_1000x.jpg?v=1564636248"}];

const Product = props => {
    console.log(props);
        const productObj = productArr.find(
            element => element.id == props.match.params.id
        );
        if (productObj) {
            return (
                <React.Fragment>
                    <div style={{ border: "1px solid black" }} className="text-center">
                        <h1> {productObj.name} </h1>
                        <h3> Price Starts From : {productObj.price} </h3>
                        <img src={productObj.url} style={{width:500, height:400}}></img><br />
                        <button className="btn border border-success mb-3 mt-3 text-success">ADD TO CART</button>
                    </div>
                </React.Fragment>
            );
        } 
        else {
            return (
                <React.Fragment>
                    <h1 className="text-danger text-center"> 404, Product not found, invalid id </h1>
                </React.Fragment>
            );
        }
};

class ProductsCategory extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <React.Fragment>
                    <Route
                        path="/products/:id"
                        render={props => <Product {...props} />}
                    />
                    <Route
                        path="/products"
                        render={props => {
                            console.log(props);
                            return <AllProducts productArr={productArr} {...props} />;
                        }}
                    />
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default ProductsCategory;




