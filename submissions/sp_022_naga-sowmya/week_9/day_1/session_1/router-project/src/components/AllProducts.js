import React from 'react'
import { Link } from "react-router-dom";

const AllProducts = props => {
    console.log(props);
    let arr = [...props.productArr];
    if(props.match.params.orderBy == "asc" ){
        arr.sort((a,b) => a.price - b.price);
    }
    else if(props.match.params.orderBy == "desc") {
        arr.sort((a,b)=> b.price - a.price);
    }
    return (
        <React.Fragment>
            <h2> Products </h2>
            {props.match.params.orderBy === "asc" ? (
                <Link to="/products/desc"><button className="btn btn-info mb-3">Order By Descending Price</button></Link>
            ): (
                <Link to="/products/asc"><button className="btn btn-info mb-3">Order By Ascending Price</button></Link>
            )}
            <div>
                {arr.map(element => {
                    return (
                        <div key={element.id} style={{ border: "1px solid black" }}>
                            <h6> Name : {element.name} </h6>
                            <p>Price: {element.price}</p>
                            <button className="btn btn-info mb-3">Add To Cart</button>
                            {/* <Link className = "btn btn-info mb-3" to={`${props.match.url}/${element.id}`}>
                            Click to see product{" "}
                            </Link> */}
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    );
};
  

export default AllProducts;