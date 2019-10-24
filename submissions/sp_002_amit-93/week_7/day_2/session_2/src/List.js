import React from 'react';

const List = (props) => {
    return (
    <div className="Av">
        <img src="https://mk0tarestaurantt3wcn.kinstacdn.com/wp-content/uploads/2018/01/premiumforrestaurants_0.jpg" alt="food"/>
        <h1>{props.name}</h1>
        <p> {props.work}</p>
    </div>
    );
}

export default List;