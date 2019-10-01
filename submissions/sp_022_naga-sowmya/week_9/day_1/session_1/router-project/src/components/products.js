import React from 'react'
import { Route, BrowserRouter } from "react-router-dom";
import AllProducts from './AllProducts'

const productArr = [{name: "iPads",price:20 ,id: "iPads"},
                    {name: "iPhones",price:40 ,id: "iPhones"},
                    {name: "Watches",price:30 ,id: "Watches"},
                    {name:"Power Uno Wireless Charger",price:60 , id: "power-uno"},
                    {name:"Apple Watch Dock", price:69, id:"watchdock"}];

// const Product = props => {
//     console.log(props);
//         const productObj = productArr.find(
//             element => element.id == props.match.params.id
//         );
//         if (productObj) {
//             return (
//                 <React.Fragment>
//                     <div style={{ border: "1px solid black" }} className="text-center">
//                         <h1> {productObj.name} </h1>
//                         <h3> Price Starts From : {productObj.price} </h3>
//                         <img src={productObj.url} style={{width:500, height:400}}></img><br />
//                         <button className="btn border border-success mb-3 mt-3 text-success">ADD TO CART</button>
//                     </div>
//                 </React.Fragment>
//             );
//         } 
//         else {
//             return (
//                 <React.Fragment>
//                     <h1 className="text-danger text-center"> 404, Product not found, invalid id </h1>
//                 </React.Fragment>
//             );
//         }
// };

class ProductsCategory extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <React.Fragment>
                    {/* <Route
                        path="/products/:id"
                        render={props => <Product {...props} />}
                    /> */}
                    <Route
                        path="/products/:orderBy(asc|desc)"
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

