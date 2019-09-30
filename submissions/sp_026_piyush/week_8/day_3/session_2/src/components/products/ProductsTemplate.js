import React from 'react';
import { Route, Link } from "react-router-dom";

const ProductTemplate = () => {
    return (
      <React.Fragment>
        <h1> Products </h1>
        <button className="btn btn-danger text-light mr-4"><Link to="/products/iPhone"> iPhones </Link></button>
        <button className="btn btn-danger"><Link to="/products/iPad"> iPads</Link></button>
        <Route
          path="/products/iPhone"
          render={() => <Product name="iPhone" />}
        />
        <Route path="/products/iPad" render={() => <Product name="iPad" />} />
      </React.Fragment>
    );
  };

  const Product = (props) => {
    if (props.name === "iPhone") {
      return (
        <React.Fragment>
          <h1> Apple iPhone </h1>
          <h3> The Revolutionary iPhone </h3>
          <ul>
            <li> iPhone X </li>
            <li> iPhone XS </li>
            <li> iPhone 11 </li>
          </ul>
          <Link to="/products/iPhone/price">Price</Link>
          <Route
            path="/products/iPhone/price"
            render={() => {
              return (
                <React.Fragment>
                  <p> Price starts at $999 </p>
                </React.Fragment>
              );
            }}
          />
        </React.Fragment>
      );
    }
    if (props.name === "iPad") {
      return (
        <React.Fragment>
          <h1> Best Tablet Ever </h1>
          <br />
          <h3> Experience the speed </h3>
          <ul>
            <li> iPad Mini </li>
            <li> iPad Air </li>
            <li> iPad  Pro </li>
          </ul>
          <Link to="/products/iPad/price">Price</Link>
          <Route
            path="/products/iPad/price"
            render={() => {
              return (
                <React.Fragment>
                  <p> Price starts at $399 </p>
                </React.Fragment>
              );
            }}
          />
        </React.Fragment>
      );
    }
  };

export default ProductTemplate;