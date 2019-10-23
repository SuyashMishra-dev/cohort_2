import React from 'react'
// import {connect} from 'react-redux'

var data = JSON.parse(localStorage.getItem('players'));

const Display = ({match}) => {
    const {params : {itemId}} = match;
    return(
        <div className="container text-center">
                <div className="card text-white bg-dark mt-3">
                    <h2 className="card-header">Name : {data[itemId].Name} </h2>
                        <div className="card-body">
                            <h5 className="card-title">Country : {data[itemId].country}</h5>
                            <p className="card-text">T20 score : {data[itemId].t20}</p>
                            <p className="card-text">ODI Score : {data[itemId].odi}</p>
                            <p className="card-text">test Score : {data[itemId].test}</p>
                            <p className="card-text">Total : {Number(data[itemId].t20) + Number(data[itemId].odi) + Number(data[itemId].test)}</p>
                        </div>
                </div>
        </div>
    )
}

export default Display;