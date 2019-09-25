import React from 'react';

const DisplayDetails = (props) => {
    return (
        <div className="row">
            <ul className="list-group">
                <li className="list-item">Name:{props.item.name}</li>
                <li className="list-item">Age:{props.item.age}</li>
                <li className="list-item">Date of Birth:{props.item.dob}</li>
                <li className="list-item">Semester:{props.item.sem}</li>
                <li className="list-item">Branch:{props.item.branch}</li>
                <li className="list-item">Grade:{props.item.grade}</li>
                <li className="list-item">Badge:{props.item.badge}</li>                
            </ul>
            <button onClick={props.remove} className="btn btn-block btn-danger">Remove</button>
        </div>
    )
}

export default DisplayDetails;