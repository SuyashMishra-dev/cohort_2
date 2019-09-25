import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <ul className="list-group">
                <li className="list-group-item" key={props.data.name}>Name: {props.data.name}</li>
                <li className="list-group-item" key={props.data.age}>Age: {props.data.age}</li>
                <li className="list-group-item" key={props.data.dob}>DoB: {props.data.dob}</li>
                <li className="list-group-item" key={props.data.semester}>Semester: {props.data.semester}</li>
                <li className="list-group-item" key={props.data.branch}>Branch: {props.data.branch}</li>
                <li className="list-group-item" key={props.data.grade}>Grade: {props.data.grade}</li>
                <li className="list-group-item" key={props.data.no}>Badge No: {props.data.no}</li>
                <a className="btn btn-danger" onClick={() => props.func(props.data.name)}>Remove</a>
            </ul>
        </div>
    )
}

export default Card;