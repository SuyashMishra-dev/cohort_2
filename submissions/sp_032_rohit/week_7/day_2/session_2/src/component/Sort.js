import React from 'react';

function Sort(props){
    return (
        <div className="text-center">
            <button  type="button" className="btn btn-success mx-5">{props.value}</button>
        </div>
    )
}
export default Sort;