import React from 'react'
import { Link } from "react-router-dom";

const AllProducts = props => {
    console.log(props);
    return (
      <React.Fragment>
        <h2> Products </h2>
        <div style={{ border: "1px solid black" }}>
          {props.productArr.map(element => {
            return (
              <div key={element.id} style={{ border: "1px solid black" }}>
                <h6> Name : {element.name} </h6>
                <Link className = "btn btn-info mb-3" to={`${props.match.url}/${element.id}`}>
                  Click to see product{" "}
                </Link>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  };
  

export default AllProducts;